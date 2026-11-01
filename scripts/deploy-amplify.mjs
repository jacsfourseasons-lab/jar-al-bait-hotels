import fs from 'node:fs/promises';
import path from 'node:path';
import zlib from 'node:zlib';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { load } from 'cheerio';
import { CORE_META } from './update-meta-seo.mjs';

const execFileAsync = promisify(execFile);

const APP_ID = process.env.AMPLIFY_APP_ID || 'd2horogycwsy1j';
const BRANCH_NAME = process.env.AMPLIFY_BRANCH || 'main';
const REGION = process.env.AWS_REGION || 'us-east-1';

if (process.argv.includes('--prune-unused')) {
  let refText = '';
  for (const r of Object.keys(CORE_META)) {
    refText += await fs.readFile('dist' + r + 'index.html', 'utf8');
    refText += await fs.readFile('dist' + r.replace('/en/', '/ar/') + 'index.html', 'utf8');
  }
  for (const f of ['public/app.css', 'public/app.js', 'source/components/header.html', 'source/components/footer.html']) {
    refText += await fs.readFile(f, 'utf8');
  }
  for (const f of await fs.readdir('public/assets')) {
    if (/\.(css|js)$/i.test(f)) {
      refText += await fs.readFile(path.join('public/assets', f), 'utf8');
    }
  }
  const backupDir = path.resolve('../.unused-rsg-assets');
  await fs.mkdir(backupDir, { recursive: true });
  let kept = 0, moved = 0;
  for (const f of await fs.readdir('public/assets')) {
    const keep =
      refText.includes(f) ||
      /\.(css|js|woff2?|ttf|eot|svg|ico|json)$/i.test(f) ||
      /^jab-|^jar-al-bait/i.test(f);
    if (keep) {
      kept++;
    } else {
      await fs.rename(path.join('public/assets', f), path.join(backupDir, f));
      try { await fs.unlink(path.join('dist/assets', f)); } catch {}
      moved++;
    }
  }
  console.log({ kept, moved });
  process.exit(0);
}

if (process.argv.includes('--verify')) {
  const base = `https://${BRANCH_NAME}.${APP_ID}.amplifyapp.com`;
  const assetUrls = new Set();
  for (const r of Object.keys(CORE_META)) {
    const html = await fs.readFile('dist' + r + 'index.html', 'utf8');
    const $ = load(html);
    $('img[src], source[src], video[poster], link[rel="stylesheet"][href], script[src]').each((_, el) => {
      const u = $(el).attr('src') || $(el).attr('poster') || $(el).attr('href');
      if (u && u.startsWith('/')) assetUrls.add(u.split('?')[0]);
    });
  }
  console.log(`Checking ${assetUrls.size} unique assets and ${Object.keys(CORE_META).length * 2} routes on ${base}...`);
  let failed = 0;
  for (const r of Object.keys(CORE_META)) {
    for (const route of [r, r.replace('/en/', '/ar/')]) {
      const res = await fetch(base + route);
      if (res.status !== 200) {
        console.error('ROUTE FAIL:', route, res.status);
        failed++;
      }
    }
  }
  await Promise.all(
    [...assetUrls].map(async (u) => {
      const res = await fetch(base + u, { method: 'HEAD' });
      if (res.status !== 200) {
        console.error('ASSET FAIL:', u, res.status);
        failed++;
      }
    })
  );
  console.log(`Verification complete! Failed items: ${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

function createZipBuffer(files) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const { name, data, compress } of files) {
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = zlib.crc32(data) >>> 0;
    const uncompressedSize = data.length;
    const compressedData = compress ? zlib.deflateRawSync(data, { level: 6 }) : data;
    const compressedSize = compressedData.length;
    const method = compress ? 8 : 0;

    // Local file header (30 bytes + name)
    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0); // signature
    localHeader.writeUInt16LE(20, 4); // version needed
    localHeader.writeUInt16LE(0x0800, 6); // UTF-8 flag
    localHeader.writeUInt16LE(method, 8); // compression method
    localHeader.writeUInt16LE(0, 10); // mod time
    localHeader.writeUInt16LE(0x5962, 12); // mod date
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(compressedSize, 18);
    localHeader.writeUInt32LE(uncompressedSize, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28); // extra len

    localParts.push(localHeader, nameBuf, compressedData);

    // Central directory header (46 bytes + name)
    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0); // signature
    centralHeader.writeUInt16LE(20, 4); // version made by
    centralHeader.writeUInt16LE(20, 6); // version needed
    centralHeader.writeUInt16LE(0x0800, 8); // UTF-8 flag
    centralHeader.writeUInt16LE(method, 10);
    centralHeader.writeUInt16LE(0, 12);
    centralHeader.writeUInt16LE(0x5962, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(compressedSize, 20);
    centralHeader.writeUInt32LE(uncompressedSize, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30); // extra len
    centralHeader.writeUInt16LE(0, 32); // comment len
    centralHeader.writeUInt16LE(0, 34); // disk number
    centralHeader.writeUInt16LE(0, 36); // internal attrs
    centralHeader.writeUInt32LE(0, 38); // external attrs
    centralHeader.writeUInt32LE(offset, 42); // relative offset

    centralParts.push(centralHeader, nameBuf);
    offset += localHeader.length + nameBuf.length + compressedData.length;
  }

  const centralDirSize = centralParts.reduce((s, b) => s + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(centralDirSize, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, ...centralParts, eocd]);
}

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

async function runAws(args) {
  const { stdout } = await execFileAsync('aws', [...args, '--region', REGION, '--output', 'json']);
  return JSON.parse(stdout);
}

// 1. Determine required assets from core pages + CSS + JS
let coreRefText = '';
for (const r of Object.keys(CORE_META)) {
  coreRefText += await fs.readFile('dist' + r + 'index.html', 'utf8');
  coreRefText += await fs.readFile('dist' + r.replace('/en/', '/ar/') + 'index.html', 'utf8');
}
for (const f of ['dist/app.css', 'dist/app.js']) {
  coreRefText += await fs.readFile(f, 'utf8');
}
for (const f of await fs.readdir('dist/assets')) {
  if (/\.(css|js)$/i.test(f)) {
    coreRefText += await fs.readFile('dist/assets/' + f, 'utf8');
  }
}

const allDistFiles = await walk('dist');
const zipEntries = [];

for (const fullPath of allDistFiles) {
  const rel = path.relative('dist', fullPath).split(path.sep).join('/');
  if (rel === '_headers') continue;
  if (rel.startsWith('assets/')) {
    const base = path.basename(rel);
    const keepAsset =
      coreRefText.includes(base) ||
      /\.(css|js|woff2?|ttf|eot|svg|ico|json)$/i.test(base) ||
      /^jab-|^jar-al-bait/i.test(base);
    if (!keepAsset) continue;
  }
  const data = await fs.readFile(fullPath);
  const alreadyCompressed = /\.(mp4|webp|jpg|jpeg|png|woff2)$/i.test(rel);
  zipEntries.push({ name: rel, data, compress: !alreadyCompressed });
}

console.log(`Packaging ${zipEntries.length} files into deployment zip...`);
const zipBuffer = createZipBuffer(zipEntries);
console.log(`Created ZIP buffer: ${(zipBuffer.length / 1048576).toFixed(2)} MB`);

// 2. Create Amplify deployment
console.log(`Creating AWS Amplify deployment on app ${APP_ID} (branch: ${BRANCH_NAME})...`);
const deployInfo = await runAws([
  'amplify',
  'create-deployment',
  '--app-id',
  APP_ID,
  '--branch-name',
  BRANCH_NAME
]);

const { jobId, zipUploadUrl } = deployInfo;
console.log(`Uploading ZIP to Amplify S3 presigned URL (jobId: ${jobId})...`);

const uploadRes = await fetch(zipUploadUrl, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/zip',
    'Content-Length': String(zipBuffer.length)
  },
  body: zipBuffer
});

if (!uploadRes.ok) {
  const errText = await uploadRes.text();
  throw new Error(`Upload failed (${uploadRes.status}): ${errText}`);
}
console.log('Upload complete. Starting Amplify deployment...');

await runAws([
  'amplify',
  'start-deployment',
  '--app-id',
  APP_ID,
  '--branch-name',
  BRANCH_NAME,
  '--job-id',
  String(jobId)
]);

// 3. Poll until job finishes
for (let i = 0; i < 40; i++) {
  await new Promise((r) => setTimeout(r, 3000));
  const jobRes = await runAws([
    'amplify',
    'get-job',
    '--app-id',
    APP_ID,
    '--branch-name',
    BRANCH_NAME,
    '--job-id',
    String(jobId)
  ]);
  const status = jobRes?.job?.summary?.status;
  console.log(`Deployment job ${jobId} status: ${status}`);
  if (status === 'SUCCEED') {
    console.log(`SUCCESS! Live at: https://${BRANCH_NAME}.${APP_ID}.amplifyapp.com`);
    break;
  }
  if (status === 'FAILED' || status === 'CANCELLED') {
    throw new Error(`Amplify deployment ended with status: ${status}`);
  }
}
