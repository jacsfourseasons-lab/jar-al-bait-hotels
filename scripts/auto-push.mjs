import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// Skip auto-push when running inside AWS Amplify CI or any remote CI environment
if (process.env.CI || process.env.AWS_BRANCH || process.env.AMPLIFY_SKIP_AUTOPUSH) {
  process.exit(0);
}

async function runGit(args) {
  const { stdout } = await execFileAsync('git', args);
  return stdout.trim();
}

try {
  const status = await runGit(['status', '--porcelain']);
  if (!status) {
    console.log('[auto-sync] No local changes to push to GitHub.');
    process.exit(0);
  }

  console.log('[auto-sync] Staging, committing, and pushing changes to GitHub (main) -> AWS Amplify...');
  await runGit(['add', '-A']);
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  await runGit(['commit', '-m', `Auto-update website (${timestamp})`]);
  await runGit(['push', 'origin', 'main']);
  console.log('[auto-sync] Pushed to GitHub! AWS Amplify will automatically update the live website.');
} catch (err) {
  console.warn('[auto-sync] Warning:', err.message);
}
