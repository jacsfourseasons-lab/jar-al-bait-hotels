import fs from 'node:fs/promises';

export const BLOGS = [
  {
    slug: 'smart-hospitality-technology-central-reservations-saudi-hotels',
    route: '/en/media-center/smart-hospitality-technology-central-reservations-saudi-hotels/',
    file: 'en__media-center__smart-hospitality-technology-central-reservations-saudi-hotels.html',
    categoryKey: 'operations',
    categoryEn: 'Operations & Vision 2030',
    categoryAr: 'التشغيل الفندقي ورؤية 2030',
    locationEn: 'Makkah, Jeddah, Riyadh & Al Qunfudhah, KSA',
    locationAr: 'مكة المكرمة، جدة، الرياض والقنفذة، السعودية',
    dateEn: '11 November 2026',
    dateAr: '11 نوفمبر 2026',
    readTimeEn: '6 Min Read',
    readTimeAr: '6 دقائق للقراءة',
    badgesEn: ['Smart Hospitality KSA', 'Central Reservations', 'Guest Experience'],
    badgesAr: ['الضيافة الذكية بالسعودية', 'الحجوزات المركزية', 'تجربة الضيوف'],
    titleEn: 'Smart Hospitality & Central Reservations in Saudi Arabia: Powering Seamless Guest Stays',
    titleAr: 'الضيافة الذكية والحجوزات المركزية في المملكة العربية السعودية: الارتقاء بتجربة الضيوف',
    metaTitleEn: 'Smart Hospitality & Booking KSA | Jar Al Bait Hotels',
    metaTitleAr: 'الضيافة الذكية والحجوزات المركزية | فنادق جار البيت',
    excerptEn: 'Explore how Jar Al Bait Hotel Group integrates digital reservation systems, B2B booking technology through Oz for Solutions, and guest-first service across Makkah Al Mukarramah and Al Qunfudhah.',
    excerptAr: 'استكشف كيف تدمج مجموعة فنادق جار البيت أنظمة الحجوزات الرقمية، وحلول تقنية الضيافة عبر شركة أوز للحلول، ومعايير العناية الفائقة بالضيوف في مكة المكرمة والقنفذة.',
    featuredImage: '/assets/jab-about-hero.webp',
    featuredImageAltEn: 'Smart hospitality management and central reservations in Saudi Arabia by Jar Al Bait Hotel Group',
    featuredImageAltAr: 'الإدارة الفندقية الذكية ومنظومة الحجوزات المركزية في السعودية من مجموعة فنادق جار البيت',
    inlineImage1: '/assets/jab-company-oz-solutions.webp',
    inlineImage1AltEn: 'Digital hospitality technology and reservation systems powered by Oz for Solutions',
    inlineImage1AltAr: 'أنظمة التقنية الفندقية والحجوزات الرقمية بدعم من شركة أوز للحلول',
    inlineImage1CaptionEn: 'Integrated digital platforms and centralized booking workflows connect domestic and international travellers with Jar Al Bait properties across Saudi Arabia.',
    inlineImage1CaptionAr: 'منصات رقمية متكاملة وأنظمة حجز مركزية تربط المسافرين من داخل المملكة وخارجها بفنادق مجموعة جار البيت في مختلف مناطق السعودية.',
    inlineImage2: '/assets/jab-track-anwar-al-aseel.webp',
    inlineImage2AltEn: 'High-capacity hotel operations and seamless guest arrival management in Makkah',
    inlineImage2AltAr: 'عمليات تشغيلية فندقية عالية السعة وإدارة سلسة لوصول الضيوف في مكة المكرمة',
    inlineImage2CaptionEn: 'Coordinated reservation management and front-desk technology ensure smooth check-in even during peak Umrah and Hajj seasons in Makkah Al Mukarramah.',
    inlineImage2CaptionAr: 'يسهم التكامل بين إدارة الحجوزات المركزية وأنظمة الاستقبال الحديثة في ضمان سلاسة إجراءات الوصول حتى خلال ذروة مواسم العمرة والحج في مكة المكرمة.',
    quoteEn: '“Modern Saudi hospitality thrives when advanced reservation technology works hand in hand with authentic Arabian warmth—making every booking, arrival, and stay effortless.”',
    quoteAr: '«تزدهر الضيافة السعودية الحديثة عندما تتكامل تقنيات الحجز المتطورة مع كرم الضيافة العربية الأصيلة، لتصبح كل خطوة من الحجز وحتى الإقامة تجربة ميسّرة ومميزة.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Streamline Your Hotel Bookings or Property Distribution in Saudi Arabia',
    ctaHeadingAr: 'طوّر منظومة حجوزاتك الفندقية أو قنوات التوزيع والتسويق في المملكة',
    ctaTextEn: 'Whether you are booking stays across Makkah and Al Qunfudhah or seeking a central reservation and management partner for your hotel asset, Jar Al Bait Hotel Group is ready to assist.',
    ctaTextAr: 'سواء كنت ترغب في حجز إقامتك في مكة المكرمة والقنفذة أو تبحث عن شريك متخصص في الإدارة والحجوزات المركزية لفندقك، فإن مجموعة فنادق جار البيت جاهزة لخدمتك.',
    ctaPrimaryLabelEn: 'Connect With Our Team',
    ctaPrimaryLabelAr: 'تواصل مع فريقنا الآن',
    ctaPrimaryHref: '/en/contact-us/',
    ctaSecondaryLabelEn: 'Explore Our Services',
    ctaSecondaryLabelAr: 'استكشف خدماتنا الفندقية',
    ctaSecondaryHref: '/en/services/',
    sections: [
      {
        h2En: 'Digital Transformation in Saudi Arabia’s Hospitality & Hotel Sector',
        h2Ar: 'التحول الرقمي في قطاع الفنادق والضيافة في المملكة العربية السعودية',
        paragraphs: [
          {
            en: 'As travel across the Kingdom of Saudi Arabia accelerates under Vision 2030, guests and B2B travel partners expect instant availability, transparent pricing, and frictionless arrival experiences. From families booking weekend stays on the Red Sea coast to international tour operators coordinating thousands of pilgrim rooms in Makkah Al Mukarramah, technology now sits at the core of hospitality excellence.',
            ar: 'مع التسارع الكبير الذي يشهده قطاع السياحة والسفر في المملكة العربية السعودية في ظل رؤية 2030، يتطلع الضيوف وشركاء السفر إلى سرعة تأكيد الحجوزات، ووضوح الأسعار، وسلاسة إجراءات الوصول. وسواء تعلق الأمر بالعائلات الباحثة عن إقامة ساحلية على البحر الأحمر أو بشركات العمرة التي تنسق آلاف الغرف في مكة المكرمة، فقد أصبحت التقنية الفندقية ركيزة أساسية للتميز.'
          },
          {
            en: 'At Jar Al Bait Hotel Management & Operations Group, our ',
            ar: 'وفي مجموعة جار البيت لإدارة وتشغيل الفنادق، ترتكز ',
            linkTextEn: 'central reservations and hospitality marketing services',
            linkTextAr: 'خدمات الحجوزات المركزية والتسويق الفندقي لدينا',
            linkHref: '/en/services/',
            afterEn: ' are supported by specialized technology capabilities through ',
            afterAr: ' على قدرات تقنية متخصصة تقودها ',
            link2TextEn: 'Oz for Solutions and our diversified group companies',
            link2TextAr: 'شركة أوز للحلول ومنظومة شركاتنا التابعة',
            link2Href: '/en/subsidiaries/',
            after2En: ', creating a unified digital backbone for every managed property.',
            after2Ar: '، مما يوفر بنية رقمية موحدة تدعم كافة الفنادق المدارة ضمن مجموعتنا.'
          }
        ],
        imageIndex: 1
      },
      {
        h2En: 'How Central Reservations Elevate Guest Satisfaction and Occupancy',
        h2Ar: 'كيف تسهم منظومة الحجوزات المركزية في رفع نسب الإشغال ورضا الضيوف؟',
        paragraphs: [
          {
            en: 'A centralized reservation architecture benefits both travellers and hotel owners. For guests staying at ',
            ar: 'تحقق منظومة الحجوزات المركزية قيمة مزدوجة للضيوف وملاك الفنادق على حد سواء؛ فللضيوف المقيمين في ',
            linkTextEn: 'our hotels in Makkah Al Mukarramah and Al Qunfudhah',
            linkTextAr: 'فنادقنا في مكة المكرمة ومحافظة القنفذة',
            linkHref: '/en/portfolio/',
            afterEn: ', it guarantees accurate room allocation, rapid confirmation for special family or group requests, and coordinated pre-arrival communication.',
            afterAr: '، تضمن المنظومة دقة تخصيص الغرف، وسرعة تأكيد الطلبات الخاصة بالعائلات والمجموعات، والتنسيق المسبق قبل الوصول.'
          }
        ],
        bulletsEn: [
          'Real-Time Multi-Channel Distribution: Synchronizing room inventory across direct booking desks, B2B travel agencies, and global distribution channels.',
          'Dynamic Seasonal Yield Management: Optimizing occupancy and average daily rates (ADR) across Ramadan, Hajj, Umrah peaks, and coastal holiday seasons.',
          'Streamlined Group & Corporate Desks: Fast rooming-list integration for Umrah delegations, government missions, and corporate events.',
          'Guest Experience Continuity: Linking reservation preferences directly with front-office and housekeeping teams for personalized Saudi hospitality.'
        ],
        bulletsAr: [
          'توزيع فوري متعدد القنوات: مزامنة توافر الغرف لحظياً عبر مكاتب الحجز المباشر ووكالات السفر وشبكات التوزيع العالمية.',
          'إدارة ذكية للعوائد والمواسم: تحسين نسب الإشغال ومتوسط السعر اليومي خلال مواسم رمضان والحج والعمرة والإجازات الساحلية.',
          'مكاتب مخصصة للمجموعات والشركات: معالجة سريعة لقوائم التسكين لبعثات العمرة والوفود الرسمية وفعاليات الأعمال.',
          'تكامل تجربة الضيف: ربط تفضيلات الحجز مباشرة بفرق الاستقبال والتدبير الفندقي لتقديم ضيافة سعودية مخصصة.'
        ],
        imageIndex: 2,
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Connecting Technology With On-the-Ground Operational Excellence',
        h2Ar: 'ربط الحلول التقنية بالتميز التشغيلي الميداني في فنادق المملكة',
        paragraphs: [
          {
            en: 'Technology alone is never a substitute for attentive human service—instead, it empowers hospitality teams to focus on guests. You can see this synergy in action across our ',
            ar: 'لا تُعد التقنية بديلاً عن العناية البشرية المباشرة بالضيف، بل هي أداة تمكّن فرق الضيافة من التركيز على راحة الزوار. ويظهر هذا التكامل بوضوح في ',
            linkTextEn: 'flagship Jar Al Bait Hotel in Al Aziziyah, Makkah',
            linkTextAr: 'فندق جار البيت الرائد بحي العزيزية في مكة المكرمة',
            linkHref: '/en/media-center/makkah-hotel-accommodation-al-aziziyah-jar-al-bait/',
            afterEn: ', as well as in our broader framework for ',
            afterAr: '، وكذلك ضمن منهجيتنا الشاملة في ',
            link2TextEn: 'hotel management and operational excellence under Saudi Vision 2030',
            link2TextAr: 'إدارة وتشغيل الفنادق وفق مستهدفات رؤية السعودية 2030',
            link2Href: '/en/media-center/hotel-management-operations-saudi-vision-2030/',
            after2En: '.',
            after2Ar: '.'
          },
          {
            en: 'For hotel owners seeking to plug their property into our central reservation and commercial engine, explore our ',
            ar: 'ولملاك الفنادق الراغبين في ربط منشآتهم بمنظومة الحجوزات المركزية والتسويق الفندقي لدينا، ندعوكم لاستكشاف ',
            linkTextEn: 'marketing, reservations, and hotel partnership models',
            linkTextAr: 'نماذج شراكات التسويق والحجوزات والتشغيل الفندقي',
            linkHref: '/en/investment/',
            afterEn: ' or ',
            afterAr: ' أو ',
            link2TextEn: 'contact our reservations and commercial team',
            link2TextAr: 'التواصل مع فريق الحجوزات والإدارة التجارية لدينا',
            link2Href: '/en/contact-us/',
            after2En: ' today.',
            after2Ar: ' اليوم.'
          }
        ]
      }
    ]
  },
  {
    slug: 'makkah-hotel-accommodation-al-aziziyah-jar-al-bait',
    route: '/en/media-center/makkah-hotel-accommodation-al-aziziyah-jar-al-bait/',
    file: 'en__media-center__makkah-hotel-accommodation-al-aziziyah-jar-al-bait.html',
    categoryKey: 'makkah',
    categoryEn: 'Makkah Hospitality',
    categoryAr: 'ضيافة مكة المكرمة',
    locationEn: 'Makkah Al Mukarramah, Saudi Arabia',
    locationAr: 'مكة المكرمة، المملكة العربية السعودية',
    dateEn: '27 October 2026',
    dateAr: '27 أكتوبر 2026',
    readTimeEn: '6 Min Read',
    readTimeAr: '6 دقائق للقراءة',
    badgesEn: ['Hotels in Makkah', 'Al Aziziyah Accommodation', 'Umrah & Hajj Stays'],
    badgesAr: ['فنادق مكة المكرمة', 'إقامة العزيزية بمكة', 'إقامة المعتمرين والحجاج'],
    titleEn: 'Premier Hotel Accommodation in Makkah: Inside Jar Al Bait Hotel in Al Aziziyah',
    titleAr: 'إقامة فندقية متميزة في مكة المكرمة: جولة داخل فندق جار البيت بحي العزيزية',
    metaTitleEn: 'Makkah Al Aziziyah Hotel Guide | Jar Al Bait Hotels',
    metaTitleAr: 'فندق جار البيت بالعزيزية مكة | مجموعة فنادق جار البيت',
    excerptEn: 'Discover why Al Aziziyah is one of Makkah Al Mukarramah’s most strategic hospitality districts and how Jar Al Bait Hotel delivers comfortable rooms, family suites, and dedicated services for Umrah pilgrims, Hajj delegations, and visitors across Saudi Arabia.',
    excerptAr: 'اكتشف لماذا يُعد حي العزيزية من أبرز الأحياء الفندقية الاستراتيجية في مكة المكرمة، وكيف يوفر فندق جار البيت غرفاً مريحة وأجنحة عائلية وخدمات متكاملة للمعتمرين وحجاج بيت الله الحرام والزوار في المملكة العربية السعودية.',
    featuredImage: '/assets/jab-hotel-jar-al-bait.webp',
    featuredImageAltEn: 'Jar Al Bait Hotel in Al Aziziyah, Makkah Al Mukarramah',
    featuredImageAltAr: 'فندق جار البيت في حي العزيزية بمكة المكرمة',
    inlineImage1: '/assets/jab-portfolio-overview.webp',
    inlineImage1AltEn: 'Spacious rooms and welcoming hospitality at Jar Al Bait Hotel in Makkah',
    inlineImage1AltAr: 'غرف فندقية رحبة وضيافة أصيلة في فندق جار البيت بمكة المكرمة',
    inlineImage1CaptionEn: 'Jar Al Bait Hotel in Al Aziziyah combines contemporary comfort with genuine Saudi hospitality for families, pilgrims, and group travellers.',
    inlineImage1CaptionAr: 'يجمع فندق جار البيت في حي العزيزية بين الراحة العصرية وكرم الضيافة السعودية الأصيلة للعائلات والمعتمرين والمجموعات.',
    inlineImage2: '/assets/jab-track-al-kiswah-towers.webp',
    inlineImage2AltEn: 'Proven hotel operations track record across Makkah Al Mukarramah',
    inlineImage2AltAr: 'سجل تشغيلي حافل في إدارة وتشغيل الفنادق في مكة المكرمة',
    inlineImage2CaptionEn: 'Backed by an operational heritage across 22 hotel properties in Makkah, Jar Al Bait Hotel Group sets high benchmarks for pilgrim and guest comfort.',
    inlineImage2CaptionAr: 'بدعم من خبرة تشغيلية تشمل 22 منشأة فندقية في مكة المكرمة، ترسي مجموعة فنادق جار البيت معايير رفيعة لراحة الضيوف والمعتمرين.',
    quoteEn: '“True hospitality in Makkah Al Mukarramah means creating a peaceful, well-managed sanctuary where every guest, family, and pilgrim can focus on their spiritual journey with complete peace of mind.”',
    quoteAr: '«إن الضيافة الحقيقية في مكة المكرمة تعني توفير بيئة هادئةومدارة باحترافية عالية تتيح لكل ضيف وعائلة ومعتمر التفرغ لرحلته الإيمانية براحة وطمأنينة تامة.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Planning Your Next Stay or Group Booking in Makkah Al Mukarramah?',
    ctaHeadingAr: 'هل تخطط لإقامتك القادمة أو لحجز مجموعات في مكة المكرمة؟',
    ctaTextEn: 'Connect with Jar Al Bait Hotel Group to arrange comfortable rooms, spacious family suites, or tailored Umrah and Hajj group accommodation at Jar Al Bait Hotel in Al Aziziyah.',
    ctaTextAr: 'تواصل مع مجموعة فنادق جار البيت لترتيب إقامة مريحة في الغرف والأجنحة العائلية أو حجوزات مجموعات العمرة والحج في فندق جار البيت بحي العزيزية.',
    ctaPrimaryLabelEn: 'Book or Enquire Now',
    ctaPrimaryLabelAr: 'احجز أو استفسر الآن',
    ctaPrimaryHref: '/en/contact-us/',
    ctaSecondaryLabelEn: 'Explore Our Hotel Portfolio',
    ctaSecondaryLabelAr: 'استكشف محفظتنا الفندقية',
    ctaSecondaryHref: '/en/portfolio/',
    sections: [
      {
        h2En: 'Why Al Aziziyah Is a Premier Choice for Hotel Accommodation in Makkah',
        h2Ar: 'لماذا يُعد حي العزيزية خياراً مثالياً للإقامة الفندقية في مكة المكرمة؟',
        paragraphs: [
          {
            en: 'Selecting the right hotel in Makkah Al Mukarramah is one of the most important decisions for domestic and international travellers visiting the Holy Capital. Over the past decade, Al Aziziyah has established itself as one of the most sought-after hospitality districts in Saudi Arabia, prized for its wide boulevards, direct transport connectivity to Al Masjid Al Haram and the Holy Sites, and vibrant commercial amenities.',
            ar: 'يُعد اختيار الفندق المناسب في مكة المكرمة من أهم القرارات للمسافرين من داخل المملكة العربية السعودية وخارجها عند زيارة العاصمة المقدسة. وقد رسّخ حي العزيزية مكانته كأحد أبرز الأحياء الفندقية المفضلة في مكة المكرمة بفضل شوارعه الحيوية، وسهولة الوصول منه إلى المسجد الحرام والمشاعر المقدسة، وتكامل الخدمات التجارية والمرافق المحيطة به.'
          },
          {
            en: 'At the heart of this dynamic district stands ',
            ar: 'وفي قلب هذا الحي الحيوي يبرز ',
            linkTextEn: 'Jar Al Bait Hotel in Al Aziziyah, Makkah',
            linkTextAr: 'فندق جار البيت في حي العزيزية بمكة المكرمة',
            linkHref: '/en/portfolio/',
            afterEn: ', a flagship property operated by Jar Al Bait Hotel Management & Operations Group. Designed to serve families, individual travellers, corporate visitors, and Umrah and Hajj groups, the hotel exemplifies modern Saudi hospitality rooted in reliability, cleanliness, and attentive guest care.',
            afterAr: ' كإحدى أبرز المنشآت الفندقية التي تديرها وتشغلها مجموعة جار البيت لإدارة وتشغيل الفنادق؛ حيث صُمم الفندق لخدمة العائلات والأفراد وزوار الأعمال ومجموعات العمرة والحج وفق أعلى معايير الضيافة السعودية الأصيلة القائمة على الجودة والعناية بضيوف الرحمن.'
          }
        ]
      },
      {
        h2En: 'Spacious Rooms, Family Suites & Thoughtful Guest Amenities',
        h2Ar: 'غرف فندقية رحبة وأجنحة عائلية ومرافق مصممة لراحة الضيوف',
        paragraphs: [
          {
            en: 'Travellers searching for the best hotels in Makkah consistently prioritize room comfort, quiet rest between prayers, and dependable service. Jar Al Bait Hotel in Al Aziziyah has been carefully configured to meet the diverse needs of Saudi families and international pilgrims alike, offering flexible room categories from standard twin and triple rooms to generous family suites.',
            ar: 'يحرص المسافرون الباحثون عن أفضل فنادق مكة المكرمة على اختيار غرف توفر الراحة والهدوء وجودة الخدمة على مدار الساعة. وقد جُهز فندق جار البيت بحي العزيزية ليلبي احتياجات العائلات السعودية والمعتمرين من مختلف الدول، عبر خيارات إقامة متنوعة تشمل الغرف المزدوجة والثلاثية والأجنحة العائلية الفسيحة.'
          },
          {
            en: 'Through our ',
            ar: 'ومن خلال ',
            linkTextEn: 'integrated hotel management and guest services',
            linkTextAr: 'خدمات إدارة وتشغيل الفنادق المتكاملة',
            linkHref: '/en/services/',
            afterEn: ', every aspect of the guest journey is managed by experienced hospitality professionals—from seamless 24-hour front-desk reception and multilingual guest assistance to rigorous housekeeping standards and on-site dining.',
            afterAr: '، يشرف فريق متخصص من الكفاءات الفندقية على أدق تفاصيل تجربة الضيف، بدءاً من الاستقبال على مدار الساعة وخدمة الضيوف بلغات متعددة وصولاً إلى أعلى معايير النظافة وخدمات الإعاشة والضيافة.'
          }
        ],
        bulletsEn: [
          'Prime location in Al Aziziyah, Makkah Al Mukarramah with convenient access to main transport corridors and the Holy Sites.',
          'Spacious guest rooms and multi-bed family suites tailored for Saudi families, Umrah performers, and seasonal pilgrim delegations.',
          'Round-the-clock reception, concierge guidance, high-speed Wi-Fi, and dedicated group check-in coordination.',
          'Professional housekeeping, safety compliance, and preventative facilities maintenance managed by Jar Al Bait specialists.'
        ],
        bulletsAr: [
          'موقع استراتيجي في حي العزيزية بمكة المكرمة يتيح سهولة الوصول إلى المحاور المرورية الرئيسية والمسجد الحرام والمشاعر المقدسة.',
          'غرف ضيوف واسعة وأجنحة عائلية متعددة الأسرة تلائم العائلات السعودية والمعتمرين وبعثات الحج.',
          'مكتب استقبال يعمل على مدار الساعة، وخدمات إرشاد الضيوف، وإنترنت عالي السرعة، وتنسيق سلس لإجراءات دخول المجموعات.',
          'معايير صارمة للنظافة والسلامة والصيانة الوقائية بإشراف فرق متخصصة من مجموعة جار البيت.'
        ],
        imageIndex: 1
      },
      {
        h2En: 'Supporting Umrah Pilgrims, Hajj Delegations & Domestic Travellers in Saudi Arabia',
        h2Ar: 'خدمة ضيوف الرحمن من المعتمرين والحجاج والزوار من مختلف مناطق المملكة',
        paragraphs: [
          {
            en: 'As the Kingdom of Saudi Arabia continues to expand pilgrim capacity and elevate hospitality benchmarks, reliable accommodation partners in Makkah play a vital role. Whether welcoming weekend family visitors from Jeddah, Riyadh, and Dammam, or hosting international tour operators throughout the Umrah season, Jar Al Bait Hotel provides consistent operational quality.',
            ar: 'مع استمرار المملكة العربية السعودية في التوسع باستقبال ضيوف الرحمن والارتقاء بمعايير قطاع الضيافة، تبرز أهمية الشركاء الفندقيين الموثوقين في مكة المكرمة. وسواء كان الضيوف من العائلات القادمة من جدة والرياض والدمام ومختلف مدن المملكة، أو من الوفود والمعتمرين القادمين من الخارج، يوفر فندق جار البيت تجربة إقامة متكاملة وموثوقة.'
          },
          {
            en: 'Travel agencies and corporate coordinators can also benefit from our specialized ',
            ar: 'كما تستفيد شركات العمرة ومنظمو الرحلات والجهات المؤسسية من ',
            linkTextEn: 'Umrah, Hajj, and group accommodation solutions in Saudi Arabia',
            linkTextAr: 'حلول إقامة مجموعات العمرة والحج والشركات في المملكة العربية السعودية',
            linkHref: '/en/media-center/umrah-hajj-group-accommodation-solutions-saudi-arabia/',
            afterEn: ', which integrate room block reservations, group dining and buffet catering, and coordinated transport logistics.',
            afterAr: '، والتي تجمع بين تخصيص الغرف للمجموعات وخدمات الإعاشة والتموين وتنسيق النقل والخدمات اللوجستية.'
          }
        ],
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Backed by a Proven Operational Legacy in Makkah Al Mukarramah',
        h2Ar: 'خبرة تشغيلية عريقة وسجل حافل في فنادق مكة المكرمة',
        paragraphs: [
          {
            en: 'What sets Jar Al Bait Hotel apart is the deep institutional expertise of its operator. Since 2010, our group has built a ',
            ar: 'ما يميز فندق جار البيت هو الخبرة المؤسسية العميقة للمجموعة المشغلة له؛ فمنذ عام 2010 بنت المجموعة ',
            linkTextEn: 'hospitality legacy across 22 hotel properties in Makkah',
            linkTextAr: 'إرثاً فندقياً يمتد عبر 22 منشأة فندقية في مكة المكرمة',
            linkHref: '/en/about-us/',
            afterEn: ', managing and operating more than 14,480 hotel rooms and 65,537 beds across major hospitality towers and pilgrim accommodation complexes.',
            afterAr: '، شملت إدارة وتشغيل أكثر من 14,480 غرفة فندقية بطاقة استيعابية تجاوزت 65,537 سريراً في كبرى الأبراج والمنشآت الفندقية بالعاصمة المقدسة.'
          },
          {
            en: 'This operational depth directly shapes our ',
            ar: 'وتنعكس هذه الخبرة الميدانية مباشرةً على ',
            linkTextEn: 'hotel management and operational excellence under Saudi Vision 2030',
            linkTextAr: 'التميز في إدارة وتشغيل الفنادق في ظل رؤية السعودية 2030',
            linkHref: '/en/media-center/hotel-management-operations-saudi-vision-2030/',
            afterEn: ', ensuring every guest staying at Jar Al Bait Hotel experiences smooth check-in, well-maintained facilities, and warm Arabian hospitality.',
            afterAr: '، بما يضمن لكل ضيف في فندق جار البيت إجراءات وصول ميسّرة، ومرافق عالية الجاهزية، وحفاوة استقبال تعكس أصالة الضيافة السعودية.'
          },
          {
            en: 'In addition to our Makkah presence, guests exploring the Kingdom’s western coast can also discover our ',
            ar: 'وإلى جانب حضورنا في مكة المكرمة، يمكن للضيوف المسافرين على ساحل البحر الأحمر استكشاف ',
            linkTextEn: 'Red Sea coastal hotels in Al Qunfudhah — Oz Park Hotel and Al Jawhara Hotel',
            linkTextAr: 'فنادقنا الساحلية في القنفذة — فندق أوز بارك وفندق الجوهرة',
            linkHref: '/en/media-center/al-qunfudhah-red-sea-hotels-oz-park-al-jawhara/',
            afterEn: ', or ',
            afterAr: '، أو ',
            link2TextEn: 'contact our reservations and hospitality team',
            link2TextAr: 'التواصل مباشرة مع فريق الحجوزات والضيافة لدينا',
            link2Href: '/en/contact-us/',
            after2En: ' to plan their upcoming stay in Saudi Arabia.',
            after2Ar: ' للتخطيط لإقامتهم القادمة في المملكة العربية السعودية.'
          }
        ],
        imageIndex: 2
      }
    ]
  },
  {
    slug: 'al-qunfudhah-red-sea-hotels-oz-park-al-jawhara',
    route: '/en/media-center/al-qunfudhah-red-sea-hotels-oz-park-al-jawhara/',
    file: 'en__media-center__al-qunfudhah-red-sea-hotels-oz-park-al-jawhara.html',
    categoryKey: 'coastal',
    categoryEn: 'Red Sea & Al Qunfudhah',
    categoryAr: 'البحر الأحمر والقنفذة',
    locationEn: 'Al Qunfudhah, Makkah Province, KSA',
    locationAr: 'القنفذة، منطقة مكة المكرمة، السعودية',
    dateEn: '21 October 2026',
    dateAr: '21 أكتوبر 2026',
    readTimeEn: '5 Min Read',
    readTimeAr: '5 دقائق للقراءة',
    badgesEn: ['Al Qunfudhah Hotels', 'Red Sea Coast KSA', 'Family & Business Stays'],
    badgesAr: ['فنادق القنفذة', 'ساحل البحر الأحمر', 'إقامة العائلات والأعمال'],
    titleEn: 'Red Sea Coastal Hospitality in Al Qunfudhah: Oz Park Hotel & Al Jawhara Hotel',
    titleAr: 'الضيافة الساحلية على البحر الأحمر في القنفذة: فندق أوز بارك وفندق الجوهرة',
    metaTitleEn: 'Al Qunfudhah Red Sea Hotels | Jar Al Bait Hotel Group',
    metaTitleAr: 'فنادق القنفذة أوز بارك والجوهرة | فنادق جار البيت',
    excerptEn: 'Explore the growing Red Sea coastal city of Al Qunfudhah in Makkah Province and see how Oz Park Hotel and Al Jawhara Hotel provide welcoming stays for families, domestic tourists, and business travellers in Saudi Arabia.',
    excerptAr: 'تعرّف على مدينة القنفذة الساحلية المتنامية على شاطئ البحر الأحمر في منطقة مكة المكرمة، واكتشف كيف يقدم فندق أوز بارك وفندق الجوهرة إقامة فندقية مميزة للعائلات والسياح ورواد الأعمال في المملكة العربية السعودية.',
    featuredImage: '/assets/jab-hotel-oz-park.webp',
    featuredImageAltEn: 'Oz Park Hotel waterfront view at sunset in Al Qunfudhah, Saudi Arabia',
    featuredImageAltAr: 'إطلالة فندق أوز بارك عند الغروب في محافظة القنفذة بالمملكة العربية السعودية',
    inlineImage1: '/assets/jab-hotel-al-jawhara.webp',
    inlineImage1AltEn: 'Al Jawhara Hotel exterior and welcoming entrance in Al Qunfudhah',
    inlineImage1AltAr: 'الواجهة الخارجية والمدخل الترحيبي لفندق الجوهرة في القنفذة',
    inlineImage1CaptionEn: 'Al Jawhara Hotel in Al Qunfudhah delivers dependable comfort, prime city accessibility, and attentive guest service for families and travellers.',
    inlineImage1CaptionAr: 'يوفر فندق الجوهرة في القنفذة إقامة مريحة وموقعاً حيوياً وخدمة ضيوف متميزة للعائلات والمسافرين.',
    inlineImage2: '/assets/jab-home-card-portfolio.webp',
    inlineImage2AltEn: 'Scenic Red Sea coastal hospitality in Al Qunfudhah by Jar Al Bait Hotel Group',
    inlineImage2AltAr: 'ضيافة ساحلية راقية في محافظة القنفذة على البحر الأحمر من مجموعة فنادق جار البيت',
    inlineImage2CaptionEn: 'Oz Park Hotel offers a relaxing waterfront setting in Al Qunfudhah, ideal for coastal leisure, family holidays, and executive stays.',
    inlineImage2CaptionAr: 'يتميز فندق أوز بارك بإطلالته الساحلية الهادئة في القنفذة، مما يجعله وجهة مثالية للعطلات العائلية وإقامة رجال الأعمال.',
    quoteEn: '“By operating both Oz Park Hotel and Al Jawhara Hotel in Al Qunfudhah, we are proud to support domestic tourism and regional hospitality growth along Saudi Arabia’s Red Sea coast.”',
    quoteAr: '«من خلال إدارة وتشغيل فندق أوز بارك وفندق الجوهرة في محافظة القنفذة، نفخر بدعم السياحة الداخلية وتنمية قطاع الضيافة على امتداد ساحل البحر الأحمر في المملكة.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Experience Coastal Comfort at Our Hotels in Al Qunfudhah',
    ctaHeadingAr: 'استمتع بإقامة ساحلية مريحة في فنادقنا بمحافظة القنفذة',
    ctaTextEn: 'Whether you are planning a Red Sea family getaway or visiting Al Qunfudhah for business, discover welcoming rooms and attentive Saudi hospitality at Oz Park Hotel and Al Jawhara Hotel.',
    ctaTextAr: 'سواء كنت تخطط لعطلة عائلية على ساحل البحر الأحمر أو تزور القنفذة في مهمة عمل، اكتشف الغرف المريحة والخدمة الراقية في فندق أوز بارك وفندق الجوهرة.',
    ctaPrimaryLabelEn: 'Contact Our Hospitality Team',
    ctaPrimaryLabelAr: 'تواصل مع فريق الضيافة',
    ctaPrimaryHref: '/en/contact-us/',
    ctaSecondaryLabelEn: 'View Our Hotels in Al Qunfudhah',
    ctaSecondaryLabelAr: 'استعرض فنادقنا في القنفذة',
    ctaSecondaryHref: '/en/portfolio/',
    sections: [
      {
        h2En: 'Al Qunfudhah: A Rising Red Sea Gateway in Makkah Province',
        h2Ar: 'القنفذة: بوابة ساحلية متألقة على البحر الأحمر في منطقة مكة المكرمة',
        paragraphs: [
          {
            en: 'Situated along the southern Red Sea coastline of Makkah Province, Al Qunfudhah has emerged as one of western Saudi Arabia’s most appealing coastal cities. Known for its corniche promenades, maritime heritage, and strategic highway links connecting Makkah, Jeddah, Al Bahah, and Asir, the city attracts year-round domestic tourism as well as commercial and government visitors.',
            ar: 'تقع محافظة القنفذة على الساحل الجنوبي للبحر الأحمر ضمن منطقة مكة المكرمة، وقد برزت كإحدى أجمل المدن الساحلية في غرب المملكة العربية السعودية. وبفضل كورنيشها البحري وإرثها الساحلي وموقعها المحوري الذي يربط بين مكة المكرمة وجدة والباحة وعسير، تستقطب القنفذة حركة متنامية من السياحة الداخلية وزوار الأعمال على مدار العام.'
          },
          {
            en: 'To serve this growing demand for quality accommodation in Al Qunfudhah, Jar Al Bait Hotel Management & Operations Group operates two distinct properties in the city: ',
            ar: 'ولتلبية الطلب المتزايد على الإقامة الفندقية عالية الجودة في القنفذة، تدير وتشغل مجموعة جار البيت لإدارة وتشغيل الفنادق منشأتين بارزتين في المحافظة هما: ',
            linkTextEn: 'Oz Park Hotel and Al Jawhara Hotel in Al Qunfudhah',
            linkTextAr: 'فندق أوز بارك وفندق الجوهرة في القنفذة',
            linkHref: '/en/portfolio/',
            afterEn: '. Together, they provide travellers with trusted hospitality standards backed by decades of Saudi hotel management expertise.',
            afterAr: '، حيث يقدمان للزوار والمسافرين مستويات ضيافة موثوقة تستند إلى عقود من الخبرة في إدارة الفنادق بالمملكة.'
          }
        ]
      },
      {
        h2En: 'Oz Park Hotel: Waterfront Serenity and Contemporary Comfort',
        h2Ar: 'فندق أوز بارك: إطلالة هادئة وراحة عصرية في القنفذة',
        paragraphs: [
          {
            en: 'For guests seeking a relaxing stay near the Red Sea breeze, Oz Park Hotel in Al Qunfudhah offers an inviting atmosphere surrounded by landscaped promenades and waterfront views. The hotel is a favorite choice among Saudi families enjoying coastal holidays, as well as visiting executives and delegations looking for a tranquil environment after a productive day.',
            ar: 'للضيوف الباحثين عن إقامة هادئة بالقرب من نسائم البحر الأحمر، يوفر فندق أوز بارك في القنفذة أجواءً ترحيبية مميزة وإطلالة ساحلية جذابة. ويُعد الفندق خياراً مفضلاً للعائلات السعودية الراغبة في قضاء عطلة ساحلية ممتعة، وكذلك لرجال الأعمال والوفود الباحثين عن الراحة والهدوء.'
          },
          {
            en: 'Supported by our ',
            ar: 'وبدعم من ',
            linkTextEn: 'professional hotel operations and guest hospitality standards',
            linkTextAr: 'معاييرنا الاحترافية في تشغيل الفنادق وخدمة الضيوف',
            linkHref: '/en/services/',
            afterEn: ', Oz Park Hotel combines well-appointed rooms and suites with attentive reception service, modern amenities, and effortless access to Al Qunfudhah’s corniche and leisure attractions.',
            afterAr: '، يجمع فندق أوز بارك بين الغرف والأجنحة المجهزة بعناية وخدمات الاستقبال الراقية وسهولة الوصول إلى الكورنيش والمرافق الترفيهية في القنفذة.'
          }
        ],
        imageIndex: 2
      },
      {
        h2En: 'Al Jawhara Hotel: Classic Arabian Warmth and Central Convenience',
        h2Ar: 'فندق الجوهرة: أصالة الضيافة العربية وسهولة الوصول في قلب القنفذة',
        paragraphs: [
          {
            en: 'Located within easy reach of Al Qunfudhah’s commercial hubs and regional highways, Al Jawhara Hotel is designed for travellers who value convenience, spaciousness, and warm service. Its architectural character and welcoming interiors make it ideal for families, road-trip travellers journeying along the Red Sea coast, and business visitors.',
            ar: 'يتميز فندق الجوهرة بموقعه الحيوي القريب من المراكز التجارية والمحاور الرئيسية في القنفذة، ليكون وجهة مثالية للمسافرين الباحثين عن السعة والراحة وسهولة التنقل. ويجمع الفندق بين الطابع المعماري المميز والرحابة الداخلية التي تلائم العائلات والمسافرين عبر الطرق الساحلية وزوار الأعمال.'
          }
        ],
        bulletsEn: [
          'Two complementary hotels in Al Qunfudhah — Oz Park Hotel and Al Jawhara Hotel — serving leisure, family, and corporate guests.',
          'Convenient access for travellers connecting between Makkah Al Mukarramah, Jeddah, and the southern coastal regions of Saudi Arabia.',
          'Comfortable rooms, family-friendly layouts, 24/7 front-desk assistance, and consistent housekeeping quality.',
          'Centralized reservation support and corporate booking options managed by Jar Al Bait Hotel Group.'
        ],
        bulletsAr: [
          'فندقان متكاملان في محافظة القنفذة — فندق أوز بارك وفندق الجوهرة — لخدمة العائلات والسياح وقطاع الأعمال.',
          'موقع مثالي للمسافرين المتنقلين بين مكة المكرمة وجدة والمحافظات الساحلية والجنوبية في المملكة العربية السعودية.',
          'غرف مريحة وتصاميم ملائمة للعائلات وخدمة استقبال على مدار الساعة ومعايير نظافة عالية.',
          'دعم مركزي للحجوزات وخيارات مخصصة للشركات والمجموعات بإدارة مجموعة فنادق جار البيت.'
        ],
        imageIndex: 1,
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Connecting Holy Capital Stays with Red Sea Coastal Destinations',
        h2Ar: 'تكامل فندقي يربط بين العاصمة المقدسة ووجهات ساحل البحر الأحمر',
        paragraphs: [
          {
            en: 'Many domestic travellers and international visitors combine their spiritual journey in Makkah with a coastal trip along the Red Sea. Alongside our Al Qunfudhah hotels, guests can book ',
            ar: 'يحرص العديد من الزوار والعائلات في المملكة على الجمع بين أداء العمرة في مكة المكرمة وقضاء أوقات هادئة على ساحل البحر الأحمر. وإلى جانب فنادقنا في القنفذة، نوفر لضيوفنا إقامة متميزة في ',
            linkTextEn: 'Jar Al Bait Hotel in Al Aziziyah, Makkah',
            linkTextAr: 'فندق جار البيت بحي العزيزية في مكة المكرمة',
            linkHref: '/en/media-center/makkah-hotel-accommodation-al-aziziyah-jar-al-bait/',
            afterEn: ', enjoying the same trusted service standards across every stop of their itinerary.',
            afterAr: '، ليستمتعوا بذات المعايير الرفيعة من الجودة والضيافة في جميع محطات رحلتهم.'
          },
          {
            en: 'Our presence in Al Qunfudhah also reflects our broader vision for ',
            ar: 'كما يجسّد حضورنا الفندقي في القنفذة رؤيتنا التوسعية في ',
            linkTextEn: 'hospitality investment and regional expansion in Saudi Arabia',
            linkTextAr: 'الاستثمار الفندقي والتوسع الإقليمي في المملكة العربية السعودية',
            linkHref: '/en/media-center/hospitality-investment-strategic-hotel-partnerships-saudi-arabia/',
            afterEn: ' and our unwavering ',
            afterAr: ' والتزامنا الراسخ في ',
            link2TextEn: 'commitment to genuine Saudi hospitality',
            link2TextAr: 'تقديم ضيافة سعودية أصيلة ومتكاملة',
            link2Href: '/en/about-us/',
            after2En: '. To reserve your stay or discuss corporate accommodation in Al Qunfudhah, ',
            after2Ar: '. ولحجز إقامتك أو الاستفسار عن حجوزات الشركات في القنفذة، يمكنك ',
            link3TextEn: 'enquire about stays and corporate rates in Al Qunfudhah',
            link3TextAr: 'التواصل معنا للاستفسار عن الإقامة وأسعار الشركات في القنفذة',
            link3Href: '/en/contact-us/',
            after3En: ' today.',
            after3Ar: ' اليوم.'
          }
        ]
      }
    ]
  },
  {
    slug: 'hotel-management-operations-saudi-vision-2030',
    route: '/en/media-center/hotel-management-operations-saudi-vision-2030/',
    file: 'en__media-center__hotel-management-operations-saudi-vision-2030.html',
    categoryKey: 'operations',
    categoryEn: 'Operations & Vision 2030',
    categoryAr: 'التشغيل الفندقي ورؤية 2030',
    locationEn: 'Kingdom of Saudi Arabia',
    locationAr: 'المملكة العربية السعودية',
    dateEn: '15 October 2026',
    dateAr: '15 أكتوبر 2026',
    readTimeEn: '7 Min Read',
    readTimeAr: '7 دقائق للقراءة',
    badgesEn: ['Hotel Management KSA', 'Saudi Vision 2030', 'Operational Excellence'],
    badgesAr: ['إدارة الفنادق بالسعودية', 'رؤية السعودية 2030', 'التميز التشغيلي'],
    titleEn: 'Hotel Management & Operations in Saudi Arabia: Elevating Guest Standards Under Vision 2030',
    titleAr: 'إدارة وتشغيل الفنادق في المملكة العربية السعودية: الارتقاء بمعايير الضيافة في ظل رؤية 2030',
    metaTitleEn: 'Saudi Hotel Management & Ops | Jar Al Bait Hotels',
    metaTitleAr: 'إدارة وتشغيل الفنادق بالسعودية | فنادق جار البيت',
    excerptEn: 'Explore how professional hotel management, revenue optimization, and guest experience systems are transforming hospitality operations across Saudi Arabia in alignment with Vision 2030.',
    excerptAr: 'تعرف على الدور المحوري للإدارة الفندقية الاحترافية وتعظيم الإيرادات وتطوير تجربة الضيف في الارتقاء بقطاع الضيافة في المملكة العربية السعودية مواكبةً لمستهدفات رؤية 2030.',
    featuredImage: '/assets/jab-services-hero.webp',
    featuredImageAltEn: 'Hotel management and operations excellence in Saudi Arabia by Jar Al Bait Hotel Group',
    featuredImageAltAr: 'التميز في إدارة وتشغيل الفنادق في المملكة العربية السعودية من مجموعة فنادق جار البيت',
    inlineImage1: '/assets/jab-about-vision.webp',
    inlineImage1AltEn: 'Strategic hospitality leadership aligned with Saudi Vision 2030',
    inlineImage1AltAr: 'قيادة فندقية استراتيجية تواكب مستهدفات رؤية السعودية 2030',
    inlineImage1CaptionEn: 'Aligning hotel asset performance, national talent development, and service quality with the ambitions of Saudi Vision 2030.',
    inlineImage1CaptionAr: 'مواءمة الأداء التشغيلي للأصول الفندقية وتطوير الكفاءات الوطنية وجودة الخدمة مع طموحات رؤية السعودية 2030.',
    inlineImage2: '/assets/jab-services-card-06.webp',
    inlineImage2AltEn: 'Comprehensive hotel front-office, housekeeping, and commercial operations in KSA',
    inlineImage2AltAr: 'عمليات تشغيلية متكاملة تشمل الاستقبال والتدبير الفندقي والتسويق في المملكة',
    inlineImage2CaptionEn: 'Integrated hotel operations encompassing reception management, quality assurance, central reservations, and facilities care.',
    inlineImage2CaptionAr: 'منظومة تشغيلية متكاملة تشمل إدارة الاستقبال، وضمان الجودة، والحجوزات المركزية، والعناية بالمرافق.',
    quoteEn: '“Operational excellence in Saudi Arabia’s hospitality sector requires both deep local market knowledge and disciplined international management standards that maximize guest satisfaction and owner returns.”',
    quoteAr: '«يتطلب التميز التشغيلي في قطاع الضيافة السعودي الجمع بين المعرفة العميقة بالسوق المحلي وتطبيق أرقى معايير الإدارة الفندقية التي تعزز رضا الضيوف وعوائد الملاك.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Looking for a Trusted Hotel Management Partner in Saudi Arabia?',
    ctaHeadingAr: 'هل تبحث عن شريك موثوق لإدارة وتشغيل فندقك في المملكة العربية السعودية؟',
    ctaTextEn: 'From full turnkey hotel management and daily front-office operations to revenue optimization and B2B distribution, Jar Al Bait Hotel Group elevates hospitality assets across the Kingdom.',
    ctaTextAr: 'بدءاً من الإدارة والتشغيل الكامل للفنادق والعمليات اليومية وصولاً إلى تنمية الإيرادات والتسويق المؤسسي، ترتقي مجموعة فنادق جار البيت بأداء الأصول الفندقية في المملكة.',
    ctaPrimaryLabelEn: 'Explore Our Hospitality Services',
    ctaPrimaryLabelAr: 'استكشف خدماتنا الفندقية',
    ctaPrimaryHref: '/en/services/',
    ctaSecondaryLabelEn: 'Request a Management Consultation',
    ctaSecondaryLabelAr: 'اطلب استشارة إدارية وتشغيلية',
    ctaSecondaryHref: '/en/contact-us/',
    sections: [
      {
        h2En: 'The Transformation of Hospitality Operations Across the Kingdom of Saudi Arabia',
        h2Ar: 'التحول المتسارع في قطاع إدارة وتشغيل الفنادق في المملكة العربية السعودية',
        paragraphs: [
          {
            en: 'Under Saudi Vision 2030, the Kingdom of Saudi Arabia is experiencing historic growth across religious tourism, domestic leisure travel, corporate events, and regional connectivity. As millions of pilgrims, families, and business visitors travel through Makkah Al Mukarramah, Jeddah, Riyadh, and emerging coastal cities, hotel owners face rising expectations for operational efficiency and guest satisfaction.',
            ar: 'في ظل رؤية السعودية 2030، يشهد قطاع السياحة والضيافة في المملكة العربية السعودية نمواً تاريخياً غير مسبوق يشمل سياحة العمرة والحج، والسياحة الداخلية، وفعاليات الأعمال. ومع توافد ملايين المعتمرين والعائلات والمسافرين إلى مكة المكرمة وجدة والرياض والمدن الساحلية، تتزايد تطلعات ملاك الفنادق والضيوف نحو أعلى مستويات الكفاءة التشغيلية وجودة الخدمة.'
          },
          {
            en: 'Through our ',
            ar: 'ومن خلال ',
            linkTextEn: 'comprehensive hotel management and operational services',
            linkTextAr: 'خدماتنا الشاملة في إدارة وتشغيل الفنادق',
            linkHref: '/en/services/',
            afterEn: ', Jar Al Bait Hotel Management & Operations Group bridges the gap between property ownership and world-class hospitality execution—delivering structured operating systems tailored specifically to the Saudi market.',
            afterAr: '، تقدم مجموعة جار البيت لإدارة وتشغيل الفنادق حلولاً متكاملة تربط بين ملكية العقار الفندقي والتشغيل الاحترافي عالي الكفاءة، عبر أنظمة إدارية مصممة خصيصاً لواقع ومتطلبات السوق السعودي.'
          }
        ],
        imageIndex: 1
      },
      {
        h2En: 'Core Pillars of High-Performing Hotel Management in KSA',
        h2Ar: 'الركائز الأساسية لإدارة وتشغيل الفنادق بكفاءة عالية في المملكة',
        paragraphs: [
          {
            en: 'Successful hotel operations in Saudi Arabia demand seamless coordination across every department. Drawing on an ',
            ar: 'يتطلب النجاح في تشغيل الفنادق بالمملكة العربية السعودية تنسيقاً دقيقاً بين كافة الإدارات التشغيلية والتجارية. وبالاستناد إلى ',
            linkTextEn: 'operational track record of 22 hotel properties and 14,480 rooms',
            linkTextAr: 'سجل تشغيلي يضم 22 منشأة فندقية و14,480 غرفة مدارة',
            linkHref: '/en/about-us/',
            afterEn: ', our group implements proven standard operating procedures (SOPs) that safeguard asset value while elevating guest reviews.',
            afterAr: '، تطبق مجموعتنا إجراءات تشغيل قياسية معتمدة تحافظ على قيمة الأصل العقاري وترفع معدلات رضا الضيوف.'
          }
        ],
        bulletsEn: [
          'Full Hotel Operations Management: End-to-end leadership of front office, housekeeping, guest relations, food and beverage, and security teams.',
          'Commercial & Revenue Optimization: Dynamic pricing, seasonal yield management for Umrah and Hajj peaks, and multi-channel B2B/B2C distribution.',
          'Central Reservations & Group Sales: Direct partnerships with domestic and international tour operators, corporate clients, and government entities.',
          'Facilities & Preventative Maintenance: Rigorous engineering oversight, safety compliance, and lifecycle asset protection.'
        ],
        bulletsAr: [
          'الإدارة التشغيلية الكاملة للفنادق: إشراف شامل على المكاتب الأمامية، والتدبير الفندقي، وعلاقات الضيوف، والأغذية والمشروبات، والأمن والسلامة.',
          'تنمية الإيرادات والإدارة التجارية: تسعير مرن وإدارة حصيفة للعوائد خلال مواسم الذروة والعمرة والحج، وتوزيع متعدد القنوات.',
          'الحجوزات المركزية ومبيعات المجموعات: شراكات مباشرة مع شركات السياحة والعمرة والعملاء من الشركات والجهات الحكومية.',
          'إدارة المرافق والصيانة الوقائية: إشراف هندسي دقيق والتزام كامل بمعايير السلامة للحفاظ على جودة المبنى الفندقي على المدى الطويل.'
        ],
        imageIndex: 2,
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Empowering Hotel Owners Through Flexible Operating Models',
        h2Ar: 'تمكين ملاك الفنادق عبر نماذج تشغيل وشراكة مرنة',
        paragraphs: [
          {
            en: 'Every hospitality asset in Saudi Arabia has unique commercial objectives. Whether a property owner requires a full management agreement, a fixed-return lease, or a collaborative revenue-sharing structure, our ',
            ar: 'يمتلك كل مشروع فندقي في المملكة العربية السعودية أهدافاً استثمارية وتشغيلية خاصة به. وسواء كان مالك الفندق يبحث عن عقد إدارة وتشغيل كامل، أو عقد إيجار بعائد ثابت، أو شراكة في الإيرادات، فإن ',
            linkTextEn: 'flexible hotel operating models and owner partnerships',
            linkTextAr: 'نماذج التشغيل الفندقي والشراكات المرنة للملاك',
            linkHref: '/en/investment/',
            afterEn: ' are structured to align incentives and deliver transparent financial reporting.',
            afterAr: ' لدينا صُممت لتحقيق التوافق الكامل في الأهداف وتقديم تقارير مالية وتشغيلية تتسم بالشفافية والوضوح.'
          },
          {
            en: 'We apply these same rigorous standards across our own ',
            ar: 'ونطبّق هذه المعايير الصارمة في ',
            linkTextEn: 'managed hotels across Makkah and Al Qunfudhah',
            linkTextAr: 'فنادقنا المدارة في مكة المكرمة والقنفذة',
            linkHref: '/en/portfolio/',
            afterEn: ' as well as our ',
            afterAr: ' وكذلك ضمن ',
            link2TextEn: 'strategic hotel investment partnerships in Saudi Arabia',
            link2TextAr: 'شراكات الاستثمار الفندقي الاستراتيجية في المملكة العربية السعودية',
            link2Href: '/en/media-center/hospitality-investment-strategic-hotel-partnerships-saudi-arabia/',
            after2En: '. Property owners and developers ready to enhance their hotel’s performance can ',
            after2Ar: '. ويمكن لملاك الفنادق والمطورين الراغبين في الارتقاء بأداء منشآتهم ',
            link3TextEn: 'partner with our hotel management specialists',
            link3TextAr: 'التواصل مع خبراء إدارة وتشغيل الفنادق لدينا',
            link3Href: '/en/contact-us/',
            after3En: ' for a tailored assessment.',
            after3Ar: ' للحصول على تقييم تشغيلي واستشاري مخصص.'
          }
        ]
      }
    ]
  },
  {
    slug: 'umrah-hajj-group-accommodation-solutions-saudi-arabia',
    route: '/en/media-center/umrah-hajj-group-accommodation-solutions-saudi-arabia/',
    file: 'en__media-center__umrah-hajj-group-accommodation-solutions-saudi-arabia.html',
    categoryKey: 'makkah',
    categoryEn: 'Umrah & Group Stays',
    categoryAr: 'خدمات العمرة وإقامة المجموعات',
    locationEn: 'Makkah & Kingdom of Saudi Arabia',
    locationAr: 'مكة المكرمة والمملكة العربية السعودية',
    dateEn: '09 October 2026',
    dateAr: '09 أكتوبر 2026',
    readTimeEn: '6 Min Read',
    readTimeAr: '6 دقائق للقراءة',
    badgesEn: ['Umrah & Hajj Hospitality', 'Group Accommodation KSA', 'Pilgrim Services Makkah'],
    badgesAr: ['ضيافة العمرة والحج', 'إقامة المجموعات بالسعودية', 'خدمات ضيوف الرحمن'],
    titleEn: 'Integrated Umrah, Hajj & Corporate Group Accommodation Solutions in Saudi Arabia',
    titleAr: 'حلول الإيواء المتكاملة لمجموعات العمرة والحج والشركات في المملكة العربية السعودية',
    metaTitleEn: 'Umrah & Group Accommodation KSA | Jar Al Bait Hotels',
    metaTitleAr: 'إيواء مجموعات العمرة والحج | مجموعة فنادق جار البيت',
    excerptEn: 'Learn how Jar Al Bait Hotel Group coordinates high-capacity room blocks, pilgrim hospitality, group catering, and transport logistics for Umrah, Hajj, and corporate delegations in Saudi Arabia.',
    excerptAr: 'اكتشف كيف تنسق مجموعة فنادق جار البيت حجوزات المجموعات عالية السعة، وخدمات ضيوف الرحمن، والإعاشة والتموين، والخدمات اللوجستية والنقل لبعثات العمرة والحج ووفود الشركات في المملكة.',
    featuredImage: '/assets/jab-track-al-rajhi-center.webp',
    featuredImageAltEn: 'High-capacity Umrah and Hajj group accommodation in Makkah, Saudi Arabia',
    featuredImageAltAr: 'إسكان وإيواء مجموعات العمرة والحج بطاقة استيعابية عالية في مكة المكرمة',
    inlineImage1: '/assets/jab-hotel-jar-al-bait.webp',
    inlineImage1AltEn: 'Jar Al Bait Hotel in Al Aziziyah welcoming pilgrim and family groups in Makkah',
    inlineImage1AltAr: 'فندق جار البيت في العزيزية يستقبل مجموعات المعتمرين والعائلات في مكة المكرمة',
    inlineImage1CaptionEn: 'Seamless group check-in and high-capacity room allocation at Jar Al Bait Hotel in Al Aziziyah, Makkah Al Mukarramah.',
    inlineImage1CaptionAr: 'تنسيق سلس لدخول المجموعات وتخصيص الغرف بكفاءة عالية في فندق جار البيت بحي العزيزية في مكة المكرمة.',
    inlineImage2: '/assets/jab-sector-food.webp',
    inlineImage2AltEn: 'Integrated hospitality catering and food services for Umrah and Hajj groups',
    inlineImage2AltAr: 'خدمات إعاشة وتموين فندقي متكاملة لمجموعات العمرة والحج والوفود',
    inlineImage2CaptionEn: 'Integrated food production, buffet catering, and guest support services tailored to international pilgrim delegations and corporate groups.',
    inlineImage2CaptionAr: 'خدمات إعاشة وتموين وبوفيهات فندقية متكاملة مصممة لتلبية احتياجات بعثات المعتمرين والحجاج ووفود الشركات.',
    quoteEn: '“Managing accommodation for thousands of pilgrims and group travellers requires precision planning, warm hospitality, and integrated support across rooms, catering, and transport.”',
    quoteAr: '«إن إدارة الإيواء لآلاف المعتمرين والحجاج والمسافرين ضمن مجموعات تتطلب تخطيطاً دقيقاً وضيافة أصيلة وتكاملاً شاملاً بين الغرف والإعاشة والنقل.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Coordinate Seamless Group & Pilgrim Accommodation in Makkah',
    ctaHeadingAr: 'نسّق إقامة مجموعات العمرة والحج والوفود في مكة المكرمة بكل سلاسة',
    ctaTextEn: 'Partner with Jar Al Bait Hotel Group for reliable seasonal and year-round room blocks, central reservation management, group catering, and dedicated pilgrim logistics across Saudi Arabia.',
    ctaTextAr: 'تعاون مع مجموعة فنادق جار البيت للحصول على حجوزات مجموعات موثوقة طوال العام، وإدارة مركزية للحجوزات، وخدمات إعاشة متكاملة لضيوف الرحمن في المملكة.',
    ctaPrimaryLabelEn: 'Enquire About Group Bookings',
    ctaPrimaryLabelAr: 'استفسر عن حجوزات المجموعات',
    ctaPrimaryHref: '/en/contact-us/',
    ctaSecondaryLabelEn: 'Discover Our Hospitality Services',
    ctaSecondaryLabelAr: 'اكتشف خدماتنا الفندقية المتكاملة',
    ctaSecondaryHref: '/en/services/',
    sections: [
      {
        h2En: 'Meeting the Complex Demands of Pilgrim & Group Hospitality in Saudi Arabia',
        h2Ar: 'تلبية المتطلبات الدقيقة لضيافة وإسكان مجموعات العمرة والحج في المملكة',
        paragraphs: [
          {
            en: 'Hosting Umrah performers, Hajj missions, and large corporate delegations in the Kingdom of Saudi Arabia requires far more than standard room bookings. Group organizers, international travel agencies, and institutional partners depend on synchronized arrival workflows, multi-bed room configurations, culturally tailored catering, and reliable shuttle logistics.',
            ar: 'إن استضافة المعتمرين وبعثات الحج والوفود المؤسسية الكبيرة في المملكة العربية السعودية تتطلب منظومة أوسع بكثير من مجرد حجز الغرف الفندقية؛ حيث تعتمد شركات العمرة والوكالات السياحية والجهات المنظمة على سلاسة إجراءات الوصول، وتوزيع الغرف متعددة الأسرة، وخدمات الإعاشة المتنوعة، ودقة حركة النقل الترددي.'
          },
          {
            en: 'Jar Al Bait Hotel Management & Operations Group has specialized in ',
            ar: 'وقد تخصصت مجموعة جار البيت لإدارة وتشغيل الفنادق في تقديم ',
            linkTextEn: 'Hajj, Umrah, catering, and transport hospitality solutions',
            linkTextAr: 'حلول ضيافة الحج والعمرة والإعاشة والنقل المتكاملة',
            linkHref: '/en/services/',
            afterEn: ' since 2010, having operated iconic high-capacity properties in Makkah including Al Kiswah Towers, Al Rajhi Center, Meridien Towers, and Anwar Al Aseel.',
            afterAr: ' منذ عام 2010، من خلال سجل حافل في تشغيل كبرى المنشآت الفندقية عالية السعة في مكة المكرمة مثل أبراج الكسوة، ومركز الراجحي، وأبراج الميريديان، وأنوار الأصيل.'
          }
        ],
        imageIndex: 1
      },
      {
        h2En: 'End-to-End Group Accommodation, Catering & Transport Coordination',
        h2Ar: 'منظومة شاملة تجمع بين الإيواء الفندقي وخدمات الإعاشة والنقل',
        paragraphs: [
          {
            en: 'Whether accommodating delegations at our ',
            ar: 'وسواء كانت الإقامة في ',
            linkTextEn: 'flagship accommodation at Jar Al Bait Hotel in Makkah',
            linkTextAr: 'فندق جار البيت الرائد بحي العزيزية في مكة المكرمة',
            linkHref: '/en/portfolio/',
            afterEn: ' or through our wider partner network, our group reservations and operations teams provide a single point of accountability for B2B partners and tour operators.',
            afterAr: ' أو عبر شبكة منشآتنا الفندقية، تمنح فرق الحجوزات المركزية والتشغيل لدينا لشركاء الأعمال ومنظمي الرحلات نقطة اتصال موحدة وموثوقة لإدارة كافة التفاصيل.'
          },
          {
            en: 'Furthermore, our hospitality operations are strengthened by our ',
            ar: 'كما تتعزز قدراتنا التشغيلية بدعم من ',
            linkTextEn: 'supporting group companies and food production ventures',
            linkTextAr: 'شركاتنا التابعة ومشاريع الصناعات الغذائية والتموين',
            linkHref: '/en/subsidiaries/',
            afterEn: ', enabling consistent quality control across guest meals, supply chain logistics, and digital reservation systems.',
            afterAr: '، مما يضمن رقابة صارمة على جودة الوجبات وسلاسل الإمداد وأنظمة الحجز الرقمية.'
          }
        ],
        bulletsEn: [
          'Dedicated B2B & Tour Operator Desk: Flexible allotment contracts, seasonal block bookings, and rapid rooming-list processing.',
          'Streamlined Group Arrivals: Dedicated reception lanes, luggage handling teams, and multilingual group coordinators.',
          'Custom Catering & Dining Programs: Hygienic, high-volume buffet and packed meal services tailored to diverse international cuisines.',
          'Integrated Transport & Shuttle Support: Coordinated bus scheduling and arrival/departure logistics across Makkah and the Western Region.'
        ],
        bulletsAr: [
          'مكتب مخصص لشركات السياحة والعمرة (B2B): عقود مبيعات مرنة، وحجوزات موسمية للمجموعات، ومعالجة سريعة لقوائم التسكين.',
          'تنظيم سلس لوصول الوفود: مسارات استقبال مخصصة للمجموعات، وفرق لخدمة الأمتعة، ومنسقون يتحدثون عدة لغات.',
          'برامج إعاشة وتموين مخصصة: بوفيهات فندقية ووجبات مجهزة وفق أعلى الاشتراطات الصحية لتلائم مختلف الجنسيات.',
          'تنسيق النقل والخدمات اللوجستية: جدولة دقيقة للحافلات وتنسيق حركة الوصول والمغادرة في مكة المكرمة والمنطقة الغربية.'
        ],
        imageIndex: 2,
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Partnering With Travel Agencies & Corporate Organizers Across KSA',
        h2Ar: 'شراكات موثوقة مع وكالات السفر وشركات العمرة والجهات المؤسسية في المملكة',
        paragraphs: [
          {
            en: 'For a closer look at our Makkah flagship property, read our ',
            ar: 'للتعرف أكثر على منشأتنا الفندقية في العاصمة المقدسة، يمكنكم الاطلاع على ',
            linkTextEn: 'guide to staying at Jar Al Bait Hotel in Al Aziziyah',
            linkTextAr: 'دليل الإقامة في فندق جار البيت بحي العزيزية بمكة المكرمة',
            linkHref: '/en/media-center/makkah-hotel-accommodation-al-aziziyah-jar-al-bait/',
            afterEn: ' as well as our insights on ',
            afterAr: ' إلى جانب مقالتنا حول ',
            link2TextEn: 'high-capacity hotel operations under Saudi Vision 2030',
            link2TextAr: 'إدارة وتشغيل الفنادق عالية السعة في ظل رؤية السعودية 2030',
            link2Href: '/en/media-center/hotel-management-operations-saudi-vision-2030/',
            after2En: '. Travel agencies, Umrah companies, and corporate planners can ',
            after2Ar: '. ويمكن لشركات العمرة ووكالات السفر ومنظمي الفعاليات ',
            link3TextEn: 'connect with our group reservations desk',
            link3TextAr: 'التواصل مباشرة مع مكتب حجوزات المجموعات لدينا',
            link3Href: '/en/contact-us/',
            after3En: ' to secure preferred rates and customized accommodation packages.',
            after3Ar: ' للحصول على عروض أسعار مخصصة وباقات إيواء متكاملة.'
          }
        ]
      }
    ]
  },
  {
    slug: 'hospitality-investment-strategic-hotel-partnerships-saudi-arabia',
    route: '/en/media-center/hospitality-investment-strategic-hotel-partnerships-saudi-arabia/',
    file: 'en__media-center__hospitality-investment-strategic-hotel-partnerships-saudi-arabia.html',
    categoryKey: 'investment',
    categoryEn: 'Investment & Growth',
    categoryAr: 'الاستثمار والشراكات الاستراتيجية',
    locationEn: 'Riyadh, Jeddah, Makkah & Al Qunfudhah, KSA',
    locationAr: 'الرياض، جدة، مكة المكرمة والقنفذة، السعودية',
    dateEn: '03 October 2026',
    dateAr: '03 أكتوبر 2026',
    readTimeEn: '6 Min Read',
    readTimeAr: '6 دقائق للقراءة',
    badgesEn: ['Hospitality Investment KSA', 'Hotel Operating Models', 'Strategic Partnerships'],
    badgesAr: ['الاستثمار الفندقي بالسعودية', 'نماذج تشغيل الفنادق', 'الشراكات الاستراتيجية'],
    titleEn: 'Hospitality Investment in Saudi Arabia: Flexible Hotel Operating Models & Strategic Partnerships',
    titleAr: 'الاستثمار الفندقي في المملكة العربية السعودية: نماذج تشغيل مرنة وشراكات استراتيجية',
    metaTitleEn: 'Saudi Hospitality Investment | Jar Al Bait Hotels',
    metaTitleAr: 'الاستثمار والشراكات الفندقية | فنادق جار البيت',
    excerptEn: 'Discover how hotel owners, real estate developers, and institutional investors in Saudi Arabia can unlock sustainable returns through Jar Al Bait Hotel Group’s five flexible partnership models and multi-sector ecosystem.',
    excerptAr: 'اكتشف كيف يمكن لملاك الفنادق والمطورين العقاريين والمستثمرين في المملكة العربية السعودية تحقيق عوائد مستدامة عبر نماذج الشراكة الخمسة المرنة ومنظومة الأعمال متعددة القطاعات لدى مجموعة فنادق جار البيت.',
    featuredImage: '/assets/jab-invest-hero.webp',
    featuredImageAltEn: 'Hospitality investment and strategic hotel partnerships in Saudi Arabia',
    featuredImageAltAr: 'الاستثمار الفندقي والشراكات الاستراتيجية في المملكة العربية السعودية',
    inlineImage1: '/assets/jab-invest-overview.webp',
    inlineImage1AltEn: 'Long-term value creation for hotel owners and hospitality investors in KSA',
    inlineImage1AltAr: 'خلق قيمة استثمارية طويلة الأجل لملاك الفنادق والمستثمرين في المملكة',
    inlineImage1CaptionEn: 'Structured hotel investment and management models designed to balance predictable cash flow with long-term asset appreciation.',
    inlineImage1CaptionAr: 'نماذج استثمار وإدارة فندقية منظمة توازن بين التدفقات النقدية المستقرة وتعظيم القيمة السوقية للأصل العقاري على المدى الطويل.',
    inlineImage2: '/assets/jab-companies-overview.webp',
    inlineImage2AltEn: 'Multi-sector business ecosystem supporting Jar Al Bait hospitality ventures in Saudi Arabia',
    inlineImage2AltAr: 'منظومة أعمال متنوعة تدعم المشاريع الفندقية لمجموعة جار البيت في السعودية',
    inlineImage2CaptionEn: 'Synergy across hospitality, technology (Oz for Solutions), food production (Tilal Al Zaitoon), and construction strengthens every partnership.',
    inlineImage2CaptionAr: 'التكامل بين قطاعات الضيافة والتقنية (أوز للحلول) والصناعات الغذائية (تلال الزيتون) والمقاولات يعزز قوة كل شراكة استثمارية.',
    quoteEn: '“Our approach to hospitality investment in Saudi Arabia is built on partnership flexibility, operational transparency, and an integrated business network that drives lasting value.”',
    quoteAr: '«يرتكز نهجنا للاستثمار الفندقي في المملكة العربية السعودية على مرونة الشراكة، والشفافية التشغيلية، ومنظومة الأعمال المتكاملة التي تصنع قيمة مستدامة.»',
    quoteAuthorEn: 'Jar Al Bait Hotel Management & Operations Group',
    quoteAuthorAr: 'مجموعة جار البيت لإدارة وتشغيل الفنادق',
    ctaHeadingEn: 'Unlock Long-Term Value for Your Hospitality Asset in Saudi Arabia',
    ctaHeadingAr: 'حقق قيمة مستدامة وطويلة الأمد لأصولك الفندقية في المملكة العربية السعودية',
    ctaTextEn: 'Whether you own an existing hotel property in Makkah, Jeddah, Riyadh, or Al Qunfudhah, or are developing a new hospitality project, explore our five tailored partnership models.',
    ctaTextAr: 'سواء كنت تمتلك منشأة فندقية قائمة في مكة المكرمة أو جدة أو الرياض أو القنفذة، أو تطور مشروعاً فندقياً جديداً، استكشف نماذج الشراكة الخمسة المصممة لتحقيق أهدافك.',
    ctaPrimaryLabelEn: 'Explore Investment Models',
    ctaPrimaryLabelAr: 'استكشف نماذج الاستثمار والشراكة',
    ctaPrimaryHref: '/en/investment/',
    ctaSecondaryLabelEn: 'Speak With Our Executive Team',
    ctaSecondaryLabelAr: 'تواصل مع فريقنا التنفيذي',
    ctaSecondaryHref: '/en/contact-us/',
    sections: [
      {
        h2En: 'Why Hospitality Is One of Saudi Arabia’s Most Resilient Investment Sectors',
        h2Ar: 'لماذا يُعد القطاع الفندقي من أكثر القطاعات الاستثمارية جاذبية ونمواً في المملكة؟',
        paragraphs: [
          {
            en: 'Backed by strong demographic fundamentals, expanding religious tourism in Makkah Al Mukarramah, and nationwide infrastructure investments, the Saudi hospitality sector offers compelling long-term opportunities for property owners and capital partners. However, capturing full yield from a hotel asset requires an operator capable of navigating seasonal demand cycles, B2B contracting, and cost control.',
            ar: 'بدعم من المقومات الاقتصادية القوية، والتوسع المستمر في أعداد المعتمرين والحجاج بمكة المكرمة، والاستثمارات الكبرى في البنية التحتية والسياحة، يوفر قطاع الضيافة في المملكة العربية السعودية فرصاً استثمارية واعدة طويلـة الأمد. غير أن تحقيق العائد الأمثل من الأصل الفندقي يتطلب مشغلاً خبيراً يمتلك القدرة على إدارة المواسم، والتعاقدات المؤسسية، وضبط التكاليف التشغيلية.'
          },
          {
            en: 'With a ',
            ar: 'وبالاستناد إلى ',
            linkTextEn: 'proven track record of 65,537 beds managed across Makkah',
            linkTextAr: 'سجل تشغيلي حافل يضم 65,537 سريراً تمت إدارتها في مكة المكرمة',
            linkHref: '/en/portfolio/',
            afterEn: ' and active operations across Makkah, Jeddah, Riyadh, and Al Qunfudhah, Jar Al Bait Hotel Management & Operations Group partners with real estate owners and investors to transform hospitality properties into high-performing assets.',
            afterAr: ' وحضور تشغيلي وإداري في مكة المكرمة وجدة والرياض والقنفذة، تتعاون مجموعة جار البيت لإدارة وتشغيل الفنادق مع ملاك العقارات والمستثمرين لتحويل المنشآت الفندقية إلى أصول عالية العائد.'
          }
        ],
        imageIndex: 1
      },
      {
        h2En: 'Five Flexible Hotel Operating & Partnership Models for Property Owners',
        h2Ar: 'خمسة نماذج مرنة للتشغيل والشراكة الفندقية تلائم تطلعات الملاك والمستثمرين',
        paragraphs: [
          {
            en: 'Recognizing that every investor and property owner has distinct risk-return preferences, we offer ',
            ar: 'إدراكاً منا لاختلاف الأهداف الاستثمارية وتفضيلات العائد لدى كل مالك ومستثمر، طورنا ',
            linkTextEn: 'five flexible hotel partnership and investment models',
            linkTextAr: 'خمسة نماذج مرنة للشراكة والاستثمار الفندقي',
            linkHref: '/en/investment/',
            afterEn: ' supported by our ',
            afterAr: ' مدعومة بـ ',
            link2TextEn: 'commercial, marketing, and central reservation capabilities',
            link2TextAr: 'قدراتنا التجارية والتسويقية ومنظومة الحجوزات المركزية',
            link2Href: '/en/services/',
            after2En: ':',
            after2Ar: ':'
          }
        ],
        bulletsEn: [
          'Hotel Management Agreement: Full turnkey operation by Jar Al Bait on behalf of the owner, focusing on service quality and profitability.',
          'Operation & Revenue Sharing: Collaborative partnership where operational responsibility and generated revenues are shared transparently.',
          'Fixed Lease & Direct Operation: Long-term property lease providing the owner with guaranteed, predictable returns while we manage all operations.',
          'Joint Hospitality Investment: Co-investment in high-potential hotel acquisitions, refurbishments, and new developments in Saudi Arabia.',
          'Marketing & Reservations Partnership: Plugging independent hotels into our B2B tour operator network, corporate sales channels, and digital booking engine.'
        ],
        bulletsAr: [
          'عقد الإدارة والتشغيل الفندقي: إدارة وتشغيل كامل للمنشأة الفندقية نيابةً عن المالك مع التركيز على جودة الخدمة وتعظيم الأرباح.',
          'التشغيل والمشاركة في الإيرادات: شراكة تعاونية يتم فيها تقاسم المسؤولية التشغيلية والعوائد المحققة بشفافية تامة.',
          'الإيجار الثابت والتشغيل المباشر: استئجار المنشأة الفندقية بعقد طويل الأمد يمنح المالك عائداً مضموناً ومستقراً بينما نتولى كافة العمليات.',
          'الاستثمار الفندقي المشترك: شراكة استثمارية في الاستحواذ على الفنادق الواعدة أو تطويرها وتجديدها في المملكة العربية السعودية.',
          'شراكة التسويق والحجوزات: ربط الفنادق المستقلة بشبكة مبيعات الشركات ومنظمي رحلات العمرة ومنصات الحجز المركزي لدينا.'
        ],
        includeQuote: true,
        includeInlineCta: true
      },
      {
        h2En: 'Multi-Sector Synergy: How Our Group Ecosystem Strengthens Every Hotel Asset',
        h2Ar: 'التكامل متعدد القطاعات: كيف تدعم شركات المجموعة نجاح كل مشروع فندقي؟',
        paragraphs: [
          {
            en: 'Unlike standalone operators, Jar Al Bait Hotel Group is backed by a network of ',
            ar: 'على خلاف شركات التشغيل التقليدية، تستند مجموعة فنادق جار البيت إلى شبكة من ',
            linkTextEn: 'diversified subsidiaries including Oz for Solutions and Tilal Al Zaitoon',
            linkTextAr: 'الشركات التابعة المتنوعة ومنها أوز للحلول وتلال الزيتون',
            linkHref: '/en/subsidiaries/',
            afterEn: ', alongside Diwan Mada and Tilal Al Jaouf. This ecosystem delivers built-in advantages in hospitality technology, food production, supply chain efficiency, and property fit-out.',
            afterAr: ' إلى جانب شركة ديوان مدى وتلال الجوف؛ وتمنح هذه المنظومة مزايا تنافسية مباشرة في التقنية الفندقية، والإنتاج الغذائي، وكفاءة التوريد، وتجهيز وتطوير المنشآت.'
          },
          {
            en: 'Whether we are ',
            ar: 'وسواء كنا نعمل على ',
            linkTextEn: 'expanding coastal hospitality in Al Qunfudhah',
            linkTextAr: 'التوسع في الضيافة الساحلية بمحافظة القنفذة',
            linkHref: '/en/media-center/al-qunfudhah-red-sea-hotels-oz-park-al-jawhara/',
            afterEn: ' or scaling pilgrim accommodation in Makkah, our integrated structure ensures long-term resilience. To explore collaboration opportunities, ',
            afterAr: ' أو تعزيز طاقة الإيواء الفندقي في مكة المكرمة، فإن هيكلنا المتكامل يضمن استدامة النمو والعوائد. ولاستكشاف فرص التعاون، ندعوكم إلى ',
            link2TextEn: 'schedule an investment and partnership discussion',
            link2TextAr: 'تحديد موعد لمناقشة فرص الاستثمار والشراكة الفندقية',
            link2Href: '/en/contact-us/',
            after2En: ' with our leadership team.',
            after2Ar: ' مع فريقنا القيادي.'
          }
        ],
        imageIndex: 2
      }
    ]
  }
];

function renderParagraph(p) {
  let html = p.en;
  if (p.linkHref) {
    html += `<a href="${p.linkHref}">${p.linkTextEn}</a>${p.afterEn || ''}`;
  }
  if (p.link2Href) {
    html += `<a href="${p.link2Href}">${p.link2TextEn}</a>${p.after2En || ''}`;
  }
  if (p.link3Href) {
    html += `<a href="${p.link3Href}">${p.link3TextEn}</a>${p.after3En || ''}`;
  }
  return `<p>${html}</p>`;
}

function renderInlineImage(blog, index) {
  const src = index === 1 ? blog.inlineImage1 : blog.inlineImage2;
  const alt = index === 1 ? blog.inlineImage1AltEn : blog.inlineImage2AltEn;
  const caption = index === 1 ? blog.inlineImage1CaptionEn : blog.inlineImage2CaptionEn;
  return `<div class="image"><div class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject"><figure class="jab-blog-figure"><img src="${src}" loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="${alt}" decoding="async"><figcaption class="jab-blog-figure__caption">${caption}</figcaption></figure></div></div>`;
}

function renderQuote(blog) {
  return `<div class="rsg-article-quote"><rsg-article-quote><div class="rsg-article-quote__container"><div class="rsg-article-quote__wrapper "><div class="text rsg-article-quote__text"><div class="cmp-text">${blog.quoteEn}</div></div><div class="text rsg-article-quote__author"><div class="cmp-text">${blog.quoteAuthorEn}</div></div></div></div></rsg-article-quote></div>`;
}

function renderInlineCta(blog) {
  return `<div class="jab-blog-inline-cta"><div class="jab-blog-inline-cta__badge"><p>JAR AL BAIT HOSPITALITY</p></div><h3 class="jab-blog-inline-cta__title">${blog.ctaHeadingEn}</h3><p class="jab-blog-inline-cta__text">${blog.ctaTextEn}</p><div class="jab-blog-inline-cta__actions"><a class="cmp-button mod--wave-animation jab-blog-inline-cta__btn-primary" href="${blog.ctaPrimaryHref}"><span class="cmp-button__text">${blog.ctaPrimaryLabelEn}</span></a><a class="cmp-button mod--wave-animation jab-blog-inline-cta__btn-secondary" href="${blog.ctaSecondaryHref}"><span class="cmp-button__text">${blog.ctaSecondaryLabelEn}</span></a></div></div>`;
}

function renderArticlePage(blog) {
  const relatedBlogs = BLOGS.filter((b) => b.slug !== blog.slug);
  const badgesHtml = blog.badgesEn
    .map(
      (b) => `<div class="rsg-badge__wrapper"><div class="rsg-badge__tag mod--gold"><p class="rsg-badge__text">${b}</p></div></div>`
    )
    .join('\n');

  const sectionsHtml = blog.sections
    .map((sec) => {
      const paras = sec.paragraphs.map(renderParagraph).join('\n');
      const bullets = sec.bulletsEn
        ? `<ul class="jab-blog-highlights">\n${sec.bulletsEn.map((item) => `<li>${item}</li>`).join('\n')}\n</ul>`
        : '';
      let block = `<div class="text"><div class="cmp-text"><h2>${sec.h2En}</h2>\n${paras}\n${bullets}</div></div>`;
      if (sec.imageIndex) block += '\n' + renderInlineImage(blog, sec.imageIndex);
      if (sec.includeQuote) block += '\n' + renderQuote(blog);
      if (sec.includeInlineCta) block += '\n' + renderInlineCta(blog);
      return block;
    })
    .join('\n');

  const relatedSlidesHtml = relatedBlogs
    .map(
      (rel, idx) => `<div class="swiper-slide" data-index="${idx}" role="group" aria-label="${idx + 1} / ${relatedBlogs.length}"><div class="rsg-card"><div class="rsg-card__wrapper mod--stacked-large">
    <div class="image rsg-card__img">
      <div class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
        <a class="cmp-image__link" href="${rel.route}">
          <img src="${rel.featuredImage}" loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="${rel.featuredImageAltEn}" decoding="async">
        </a>
      </div>
    </div>
    <div class="rsg-card__content">
      <div class="rsg-card__badges">
        <div class="rsg-badge"><div class="rsg-badge__wrapper"><div class="rsg-badge__tag mod--gold"><p class="rsg-badge__text">${rel.categoryEn}</p></div></div></div>
      </div>
      <div class="rsg-card__date"><p>${rel.dateEn}</p></div>
      <div class="rsg-card__title"><div class="title"><div class="cmp-title"><h3 class="cmp-title__text"><a class="cmp-title__link" href="${rel.route}">${rel.titleEn}</a></h3></div></div></div>
      <div class="rsg-link rsg-card__link"><div class="rsg-link__wrapper mod--dark"><a href="${rel.route}" class="rsg-link__link"><span class="rsg-link__label">Read Article</span></a></div></div>
    </div>
</div></div></div>`
    )
    .join('\n');

  return `<div class="root container responsivegrid">
    <div id="container-blog-${blog.slug}" class="cmp-container">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    <div class="button button--regular aem-GridColumn aem-GridColumn--default--12">
<a id="media-center-article__btn-back" class="cmp-button mod--flip" href="/en/media-center/">
    <span class="cmp-button__text">Back to Latest News</span>
</a>
</div>
    <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12 mod--sticky">
<div class="cmp-experiencefragment cmp-experiencefragment--header">
    <div class="cmp-container">
        <!--HEADER-->
    </div>
</div>
</div>
<div class="rsg-hero-section aem-GridColumn aem-GridColumn--default--12"><rsg-hero-section>
	<div class="rsg-hero-section-item rsg-hero-section__item"><rsg-hero-section-item class=" ">
    <div class="image rsg-hero-section-item__img">
<div class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
        <img src="${blog.featuredImage}" loading="eager" class="cmp-image__image" itemprop="contentUrl" width="1920" height="1080" alt="${blog.featuredImageAltEn}" decoding="async">
</div>
</div>
    <div class="rsg-hero-section-item__gradient"></div>
    <div class="rsg-hero-section-item__content">
    </div>
</rsg-hero-section-item></div>
</rsg-hero-section></div>
<div class="container responsivegrid container__media-center-article__root aem-GridColumn aem-GridColumn--default--12">
    <div class="cmp-container">
        <div class="container responsivegrid container__media-center-article__title">
    <div class="cmp-container">
        <div class="rsg-heading">
          <div class="rsg-heading__wrapper mod--left mod--large-mb mod--large-dk ">
            <div class="rsg-badge-list__wrapper layout--horizontal">
              <div class="rsg-badge-list__item">
                ${badgesHtml}
              </div>
            </div>
            <div class="rsg-heading__title mod--gold">
              <div class="cmp-title">
                <h1 class="cmp-title__text">${blog.titleEn}</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
<aside class="container responsivegrid container__media-center-article__side">
    <div class="cmp-container">
        <div class="rsg-media-center-links"><rsg-media-center-links>
            <div class="rsg-media-center-links__container rsg-media-center-links__container--date">
                <p class="rsg-media-center-links__container__title">Published</p>
                <p class="rsg-media-center-links__container__text">${blog.dateEn}</p>
            </div>
            <hr class="rsg-media-center-links__line rsg-media-center-links__line--1">
            <div class="rsg-media-center-links__container rsg-media-center-links__container--date">
                <p class="rsg-media-center-links__container__title">Reading Time</p>
                <p class="rsg-media-center-links__container__text">${blog.readTimeEn}</p>
            </div>
            <hr class="rsg-media-center-links__line rsg-media-center-links__line--1">
            <div class="rsg-media-center-links__container rsg-media-center-links__container--date">
                <p class="rsg-media-center-links__container__title">Location Focus</p>
                <p class="rsg-media-center-links__container__text">${blog.locationEn}</p>
            </div>
            <hr class="rsg-media-center-links__line rsg-media-center-links__line--1">
            <div class="rsg-media-center-links__container">
                <p class="rsg-media-center-links__container__title">Explore Jar Al Bait</p>
                <ul class="jab-blog-sidebar-nav__list">
                    <li><a href="/en/portfolio/">Our Hotel Portfolio</a></li>
                    <li><a href="/en/services/">Hospitality Services</a></li>
                    <li><a href="/en/investment/">Investment Models</a></li>
                    <li><a href="/en/subsidiaries/">Group Companies</a></li>
                    <li><a href="/en/contact-us/">Contact Our Team</a></li>
                </ul>
            </div>
        </rsg-media-center-links></div>
    </div>
</aside>
<main class="container responsivegrid container__media-center-article__content">
    <div class="cmp-container">
        <div class="text"><div class="cmp-text"><p class="jab-blog-lead">${blog.excerptEn}</p></div></div>
        ${sectionsHtml}
    </div>
</main>
    </div>
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
<div class="cmp-experiencefragment cmp-experiencefragment--article-bottom-components">
    <div class="cmp-container">
        <div class="rsg-text-section rsg-text-section--side mod--article mod--grey-bg"><rsg-text-section>
  <div class="rsg-text-section__container">
    <div class="rsg-text-section__wrapper">
      <div class="rsg-text-section__content">
        <div class="rsg-text-section__heading">
         <div class="rsg-heading">
  <div class="rsg-heading__wrapper mod--left mod--medium-mb mod--medium-dk">
    <div class="rsg-heading__title mod--gold">
      <div class="cmp-title">
        <h2 class="cmp-title__text">About Jar Al Bait Hotel Management &amp; Operations Group</h2>
      </div>
    </div>
  </div>
</div>
        </div>
        <div class="rsg-text-section__expansible-text__wrapper">
          <div class="rsg-text-section__text">
           <div class="text"><div class="cmp-text">
    <p>Jar Al Bait Hotel Management &amp; Operations Group is a trusted Saudi hospitality group specializing in <a href="/en/services/">hotel management and operations</a>, central reservations, and pilgrim accommodation across Makkah Al Mukarramah and Al Qunfudhah. With an operational legacy spanning 22 hotel properties, 14,480 rooms, and 65,537 beds, we partner with <a href="/en/investment/">property owners and investors</a> to deliver lasting hospitality value aligned with Saudi Vision 2030. Learn more <a href="/en/about-us/">about our group</a> or <a href="/en/contact-us/">contact our team</a>.</p>
</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</rsg-text-section></div>
<div class="rsg-carousel mod--mt-large mod--mb-large"><rsg-carousel data-layout="cardsSection">
  <div class="rsg-carousel__wrapper"><div class="rsg-carousel__static-content">
    <div class="rsg-heading rsg-carousel__heading">
  <div class="rsg-heading__wrapper mod--left mod--medium-mb mod--medium-dk">
    <div class="rsg-heading__pretitle mod--blue">
      <div class="cmp-text"><p>LATEST NEWS</p></div>
    </div>
    <div class="rsg-heading__title mod--gold">
      <div class="cmp-title"><h3 class="cmp-title__text">More Hospitality Insights</h3></div>
    </div>
  </div>
</div>
    <div class="text rsg-carousel__description"><div class="cmp-text">
      <p>Continue exploring Saudi hospitality guides, Makkah and Al Qunfudhah hotel updates, and strategic insights from Jar Al Bait Hotel Group.</p>
    </div></div>
    <div class="button button--secondary rsg-carousel__btn">
<a class="cmp-button mod--flip mod--wave-animation" href="/en/media-center/">
    <span class="cmp-button__text">View All Latest News</span>
</a>
</div>
</div>
<div class="rsg-carousel__carousel swiper">
    <div class="cmp-container swiper-wrapper" aria-live="polite">
      ${relatedSlidesHtml}
    </div>
</div>
<rsg-controls>
  <button class="rsg-controls__btn rsg-controls__btn--prev" aria-label="Previous slide" tabindex="-1">
    <svg class="rsg-controls__arrow rsg-controls__arrow--back rsg-controls__arrow--disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 24">
        <path d="M11.76 1.7a10.26 10.26 0 1 0 0 20.52v1a11.26 11.26 0 0 1 0-22.52z"></path>
        <rect class="rsg-controls__arrow__line" x="11.76" y="11.45" width="14.41" height="1"></rect>
        <g class="rsg-controls__arrow__moving-part">
            <path d="M26.17 1.7a10.26 10.26 0 1 1 0 20.52v1a11.26 11.26 0 0 0 0-22.52z"></path>
            <path d="m26.53 11.54.63.42-.63.42-2.91 1.91-.28-.42-.27-.41 1.51-1v-1l-1.51-1 .27-.42.28-.42z"></path>
        </g>
    </svg>
  </button>
  <div class="rsg-controls__numbers">
    <span class="rsg-controls__numbers__current">1</span>
    <span class="rsg-controls__numbers__separator">/</span>
    <span class="rsg-controls__numbers__total">${relatedBlogs.length}</span>
  </div>
  <button class="rsg-controls__btn rsg-controls__btn--next" aria-label="Next slide">
    <svg class="rsg-controls__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 24">
        <path d="M11.76 1.7a10.26 10.26 0 1 0 0 20.52v1a11.26 11.26 0 0 1 0-22.52z"></path>
        <rect class="rsg-controls__arrow__line" x="11.76" y="11.45" width="14.41" height="1"></rect>
        <g class="rsg-controls__arrow__moving-part">
            <path d="M26.17 1.7a10.26 10.26 0 1 1 0 20.52v1a11.26 11.26 0 0 0 0-22.52z"></path>
            <path d="m26.53 11.54.63.42-.63.42-2.91 1.91-.28-.42-.27-.41 1.51-1v-1l-1.51-1 .27-.42.28-.42z"></path>
        </g>
    </svg>
  </button>
</rsg-controls>
</div>
</rsg-carousel></div>
<div class="rsg-text-section"><rsg-text-section>
  <div class="rsg-text-section__container">
    <div class="rsg-text-section__wrapper">
      <div class="rsg-text-section__content">
        <div class="rsg-text-section__heading">
         <div class="rsg-heading">
  <div class="rsg-heading__wrapper mod--medium-mb mod--medium-dk">
    <div class="rsg-heading__pretitle mod--blue">
      <div class="cmp-text"><p>CONNECT WITH US</p></div>
    </div>
    <div class="rsg-heading__title mod--gold">
      <div class="cmp-title"><h4 class="cmp-title__text">Let's Create Better Hospitality Together</h4></div>
    </div>
  </div>
</div>
        </div>
        <div class="rsg-text-section__expansible-text__wrapper">
          <div class="rsg-text-section__text">
           <div class="text"><div class="cmp-text">
    <p>Whether you're looking for accommodation, hotel management expertise, or strategic partnership opportunities, Jar Al Bait Hotel Group is ready to connect.</p>
</div></div>
          </div>
        </div>
      </div>
      <div class="rsg-text-section__btn__wrapper">
        <div class="rsg-text-section__btn">
         <div class="button">
<a class="cmp-button mod--wave-animation" href="/en/contact-us/">
    <span class="cmp-button__text">Contact Us</span>
</a>
</div>
        </div>
        <div class="rsg-text-section__btn">
         <div class="button button--secondary">
<a class="cmp-button mod--wave-animation" href="/en/portfolio/">
    <span class="cmp-button__text">Explore Our Portfolio</span>
</a>
</div>
        </div>
      </div>
    </div>
  </div>
</rsg-text-section></div>
    </div>
</div>
</div>
<div class="rsg-newsletter aem-GridColumn aem-GridColumn--default--12">
<div class="rsg-newsletter__wrapper mod--embed">
    <div class="rsg-newsletter__decorator rsg-newsletter__decorator-left"></div>
    <div class="rsg-newsletter__decorator rsg-newsletter__decorator-right"></div>
    <div class="rsg-newsletter__text">
        <div class="rsg-newsletter__title title newsletter__title"><div class="cmp-title"><h5 class="cmp-title__text">News &amp; Updates</h5></div></div>
        <div class="rsg-newsletter__subtitle text newsletter-subtitle"><div class="cmp-text"><p>Subscribe to get the latest news and updates right to your inbox.</p></div></div>
    </div>
    <form class="rsg-newsletter__form" method="POST" novalidate="" data-hiderecaptcha="false">
        <div class="rsg-newsletter__fields">
            <div class="rsg-newsletter__row rsg-newsletter__row--double">
                <div class="rsg-newsletter__field">
                    <div class="rsg-newsletter__placeholder"><label for="nl-first-name">First Name</label></div>
                    <input type="text" id="first-name" name="nl-firstName" class="rsg-newsletter__input" aria-label="First Name">
                    <p class="rsg-newsletter__field--error-text">First Name</p>
                </div>
                <div class="rsg-newsletter__field">
                    <div class="rsg-newsletter__placeholder"><label for="nl-last-name">Last Name</label></div>
                    <input type="text" id="last-name" name="nl-lastName" class="rsg-newsletter__input" aria-label="Last Name">
                    <p class="rsg-newsletter__field--error-text">Last Name Error</p>
                </div>
            </div>
            <div class="rsg-newsletter__row">
                <div class="rsg-newsletter__field rsg-newsletter__field--email">
                    <div class="rsg-newsletter__placeholder"><label for="nl-email">E-mail address</label></div>
                    <input type="email" id="email" name="nl-email" class="rsg-newsletter__input" aria-label="E-mail address">
                    <p class="rsg-newsletter__field--error-text">Error message</p>
                </div>
            </div>
        </div>
        <div class="rsg-newsletter__note-text text"><div class="cmp-text">
            <p>By submitting this form, you confirm that you have read and agreed to our&nbsp;<a href="/en/terms-and-conditions/">Terms and Conditions</a>&nbsp;and&nbsp;<a href="/en/privacy-policy/">Privacy Policy.</a></p>
        </div></div>
        <div class="rsg-newsletter__submit-container">
            <button type="submit" class="rsg-newsletter__submit-button cmp-button mod--wave-animation" data-submit-state="Submitting...">Submit</button>
        </div>
    </form>
    <div class="rsg-newsletter__success-wrapper rsg-newsletter__confirmation--hidden">
        <div class="rsg-newsletter__success-image image rsg-newsletter__image"><div class="cmp-image"><img src="/assets/002ffd70-success-circle.svg" loading="lazy" class="cmp-image__image" alt="" decoding="async"></div></div>
        <div class="rsg-newsletter__success-title text success__title"><div class="cmp-text"><p>Subscription confirmed!</p></div></div>
        <div class="rsg-newsletter__success-text text success__text"><div class="cmp-text"><p>We’ll keep you posted with our latest news and updates.</p></div></div>
        <button type="button" class="rsg-newsletter__success-button cmp-button mod--wave-animation">Subscribe Another Email</button>
    </div>
    <div class="rsg-newsletter__error-wrapper rsg-newsletter__confirmation--hidden">
        <div class="rsg-newsletter__error-image image rsg-newsletter__image"><div class="cmp-image"><img src="/assets/00f174ee-error-circle.svg" loading="lazy" class="cmp-image__image" alt="" decoding="async"></div></div>
        <div class="rsg-newsletter__error-title text error__title"><div class="cmp-text"><p>Something went wrong</p></div></div>
        <div class="rsg-newsletter__error-text text error__text"><div class="cmp-text"><p>Please try again in a moment.</p></div></div>
        <button type="button" class="rsg-newsletter__error-button cmp-button mod--wave-animation">Try Again</button>
    </div>
</div>
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
<!--FOOTER-->
</div>
</div>
    </div>
</div>`;
}

function renderMediaCenterPage() {
  const featured = BLOGS[0];
  const cardsHtml = BLOGS.map((blog, idx) => {
    const badges = blog.badgesEn
      .map((b) => `<span class="jab-blog-card__tag">${b}</span>`)
      .join('');
    return `<article class="rsg-services-section-item is-visible jab-blog-card" data-blog-index="${idx}">
      <span class="js-card-value" data-value="${blog.categoryKey}" hidden></span>
      <div class="jab-blog-card__inner">
        <a href="${blog.route}" class="jab-blog-card__media" aria-label="${blog.titleEn}">
          <img src="${blog.featuredImage}" loading="${idx < 2 ? 'eager' : 'lazy'}" alt="${blog.featuredImageAltEn}" class="jab-blog-card__img" decoding="async">
          <div class="jab-blog-card__media-overlay">
            <span class="jab-blog-card__category">${blog.categoryEn}</span>
            <span class="jab-blog-card__readtime">${blog.readTimeEn}</span>
          </div>
        </a>
        <div class="jab-blog-card__body">
          <div class="jab-blog-card__meta">
            <span class="jab-blog-card__date">${blog.dateEn}</span>
            <span class="jab-blog-card__dot" aria-hidden="true">•</span>
            <span class="jab-blog-card__location">${blog.locationEn}</span>
          </div>
          <h3 class="jab-blog-card__title">
            <a href="${blog.route}">${blog.titleEn}</a>
          </h3>
          <p class="jab-blog-card__excerpt">${blog.excerptEn}</p>
          <div class="jab-blog-card__tags">${badges}</div>
          <div class="jab-blog-card__footer">
            <a href="${blog.route}" class="jab-blog-card__cta">
              <span class="jab-blog-card__cta-text">Read Article</span>
              <span class="jab-blog-card__cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>`;
  }).join('\n');

  return `<div class="root container responsivegrid">
    <div id="container-media-center-root" class="cmp-container">
<div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
    <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12 mod--sticky">
<div class="cmp-experiencefragment cmp-experiencefragment--header">
    <div class="cmp-container">
        <!--HEADER-->
    </div>
</div>
</div>
<div class="container responsivegrid aem-GridColumn aem-GridColumn--default--12">
    <div class="cmp-container">
        <div class="rsg-hero-section"><rsg-hero-section>
	<div class="rsg-hero-section-item rsg-hero-section__item"><rsg-hero-section-item>
    <div class="image rsg-hero-section-item__img">
<div class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
        <img src="/assets/jab-portfolio-overview.webp" loading="eager" class="cmp-image__image" itemprop="contentUrl" alt="Latest News — Jar Al Bait Hotel Management &amp; Operations Group" decoding="async">
</div>
</div>
    <div class="rsg-hero-section-item__gradient"></div>
    <div class="rsg-hero-section-item__content">
        <div class="rsg-hero-section-item__pretitle">
            <p>MEDIA CENTER</p>
        </div>
        <div class="rsg-hero-section-item__title">
            <div class="title"><div class="cmp-title">
                <h1 class="cmp-title__text">Latest News</h1>
            </div></div>
        </div>
    </div>
</rsg-hero-section-item></div>
</rsg-hero-section></div>

<div class="rsg-text-and-media rsg-text-and-media--mod-reversed rsg-text-and-media--mod-decoration-straight rsg-text-and-media--mod-square">
<div class="rsg-text-and-media__wrapper">
    <div class="rsg-text-and-media__col-1">
        <div class="rsg-text-and-media__label">
         <div class="text"><div class="cmp-text"><p>FEATURED STORY</p></div></div>
        </div>
        <div class="rsg-text-and-media__heading">
         <div class="text cmp-text--mod--questa-grande"><div class="cmp-text"><p>${featured.titleEn}</p></div></div>
        </div>
        <div class="rsg-text-and-media__description">
         <div class="text"><div class="cmp-text">
            <p>${featured.excerptEn}</p>
            <p>&nbsp;</p>
            <p>Explore how <a href="/en/portfolio/">Jar Al Bait Hotel</a> in Al Aziziyah, Makkah Al Mukarramah combines spacious guest rooms, family suites, and <a href="/en/services/">integrated pilgrim hospitality services</a> for visitors across the Kingdom of Saudi Arabia.</p>
         </div></div>
        </div>
        <div class="rsg-text-and-media__button">
         <div class="button">
            <a class="cmp-button mod--wave-animation" href="${featured.route}">
              <span class="cmp-button__text">Read Article</span>
            </a>
         </div>
        </div>
    </div>
    <div class="rsg-text-and-media__col-2 rsg-text-and-media__media">
        <div class="rsg-text-and-media__image">
         <div class="image">
            <div class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
                <img src="${featured.featuredImage}" loading="lazy" class="cmp-image__image" itemprop="contentUrl" alt="${featured.featuredImageAltEn}" decoding="async">
            </div>
         </div>
        </div>
    </div>
</div>
</div>

<div class="rsg-separator"><div class="rsg-separator__wrapper"></div></div>

<section class="rsg-services-section jab-blog-hub" id="latest-news-articles">
  <div class="jab-blog-hub__container">
    <div class="jab-blog-hub__header">
      <div class="rsg-heading">
        <div class="rsg-heading__wrapper mod--medium-mb mod--medium-dk">
          <div class="rsg-heading__pretitle mod--blue">
            <div class="cmp-text"><p>SAUDI ARABIA HOSPITALITY BLOG</p></div>
          </div>
          <div class="rsg-heading__title mod--gold">
            <div class="cmp-title"><h2 class="cmp-title__text">Hospitality Insights, Guides &amp; Group Updates</h2></div>
          </div>
        </div>
      </div>
      <p class="jab-blog-hub__intro">Discover in-depth articles covering hotel accommodation in Makkah Al Mukarramah, Red Sea coastal stays in Al Qunfudhah, Umrah and Hajj group services, and hotel investment partnerships aligned with Saudi Vision 2030.</p>
    </div>

    <div class="rsg-services-section__group">
      <div class="rsg-services-section__tabs js-tabs-section" role="tablist" aria-label="Filter articles by category">
        <button type="button" class="rsg-services-section__tab js-filter-button mod--active" data-value="all">All Articles</button>
        <button type="button" class="rsg-services-section__tab js-filter-button" data-value="makkah">Makkah &amp; Umrah Stays</button>
        <button type="button" class="rsg-services-section__tab js-filter-button" data-value="coastal">Red Sea &amp; Al Qunfudhah</button>
        <button type="button" class="rsg-services-section__tab js-filter-button" data-value="operations">Operations &amp; Vision 2030</button>
        <button type="button" class="rsg-services-section__tab js-filter-button" data-value="investment">Investment &amp; Partnerships</button>
      </div>
    </div>

    <div class="jab-blog-grid">
      ${cardsHtml}
    </div>
  </div>
</section>

<div class="rsg-stats-section"><div class="rsg-stats-section__bg" style="background-color: #04253C">
    <div class="rsg-stats-section__wrapper mod--top mod--animate-items">
        <div class="rsg-stats-section__heading mod--extend-heading">
            <div class="rsg-heading">
              <div class="rsg-heading__wrapper mod--medium-mb mod--medium-dk">
                <div class="rsg-heading__pretitle mod--white">
                  <div class="cmp-text"><p>EXPLORE OUR GROUP</p></div>
                </div>
                <div class="rsg-heading__title mod--white">
                  <div class="cmp-title"><h2 class="cmp-title__text">Discover Jar Al Bait Across Saudi Arabia</h2></div>
                </div>
              </div>
            </div>
        </div>
        <div class="jab-blog-explore-links">
            <a href="/en/portfolio/" class="jab-blog-explore-card">
                <span class="jab-blog-explore-card__label">OUR HOTELS</span>
                <strong class="jab-blog-explore-card__title">Our Portfolio</strong>
                <span class="jab-blog-explore-card__desc">Explore Jar Al Bait Hotel in Makkah, Oz Park Hotel, and Al Jawhara Hotel in Al Qunfudhah.</span>
            </a>
            <a href="/en/services/" class="jab-blog-explore-card">
                <span class="jab-blog-explore-card__label">HOSPITALITY SOLUTIONS</span>
                <strong class="jab-blog-explore-card__title">Our Services</strong>
                <span class="jab-blog-explore-card__desc">Full hotel management, operations, central reservations, catering, and Umrah hospitality.</span>
            </a>
            <a href="/en/investment/" class="jab-blog-explore-card">
                <span class="jab-blog-explore-card__label">STRATEGIC GROWTH</span>
                <strong class="jab-blog-explore-card__title">Investment &amp; Partnerships</strong>
                <span class="jab-blog-explore-card__desc">Five flexible hotel operating, leasing, and co-investment models across the Kingdom.</span>
            </a>
            <a href="/en/subsidiaries/" class="jab-blog-explore-card">
                <span class="jab-blog-explore-card__label">GROUP ECOSYSTEM</span>
                <strong class="jab-blog-explore-card__title">Our Companies</strong>
                <span class="jab-blog-explore-card__desc">Discover Oz for Solutions, Tilal Al Zaitoon, Diwan Mada, and Tilal Al Jaouf.</span>
            </a>
        </div>
    </div>
</div></div>

<div class="rsg-text-section"><rsg-text-section>
  <div class="rsg-text-section__container">
    <div class="rsg-text-section__wrapper">
      <div class="rsg-text-section__content">
        <div class="rsg-text-section__heading">
         <div class="rsg-heading">
  <div class="rsg-heading__wrapper mod--medium-mb mod--medium-dk">
    <div class="rsg-heading__pretitle mod--blue">
      <div class="cmp-text"><p>CONNECT WITH US</p></div>
    </div>
    <div class="rsg-heading__title mod--gold">
      <div class="cmp-title"><h4 class="cmp-title__text">Let's Create Better Hospitality Together</h4></div>
    </div>
  </div>
</div>
        </div>
        <div class="rsg-text-section__expansible-text__wrapper">
          <div class="rsg-text-section__text">
           <div class="text"><div class="cmp-text">
    <p>Whether you're looking for accommodation, hotel management expertise, or strategic partnership opportunities, Jar Al Bait Hotel Group is ready to connect.</p>
</div></div>
          </div>
        </div>
      </div>
      <div class="rsg-text-section__btn__wrapper">
        <div class="rsg-text-section__btn">
         <div class="button">
<a class="cmp-button mod--wave-animation" href="/en/contact-us/">
    <span class="cmp-button__text">Contact Us</span>
</a>
</div>
        </div>
        <div class="rsg-text-section__btn">
         <div class="button button--secondary">
<a class="cmp-button mod--wave-animation" href="/en/portfolio/">
    <span class="cmp-button__text">Explore Our Portfolio</span>
</a>
</div>
        </div>
      </div>
    </div>
  </div>
</rsg-text-section></div>

<div class="rsg-newsletter">
<div class="rsg-newsletter__wrapper mod--embed">
    <div class="rsg-newsletter__decorator rsg-newsletter__decorator-left"></div>
    <div class="rsg-newsletter__decorator rsg-newsletter__decorator-right"></div>
    <div class="rsg-newsletter__text">
        <div class="rsg-newsletter__title title newsletter__title"><div class="cmp-title"><h5 class="cmp-title__text">News &amp; Updates</h5></div></div>
        <div class="rsg-newsletter__subtitle text newsletter-subtitle"><div class="cmp-text"><p>Subscribe to get the latest news and updates right to your inbox.</p></div></div>
    </div>
    <form class="rsg-newsletter__form" method="POST" novalidate="" data-hiderecaptcha="false">
        <div class="rsg-newsletter__fields">
            <div class="rsg-newsletter__row rsg-newsletter__row--double">
                <div class="rsg-newsletter__field">
                    <div class="rsg-newsletter__placeholder"><label for="nl-first-name">First Name</label></div>
                    <input type="text" id="first-name" name="nl-firstName" class="rsg-newsletter__input" aria-label="First Name">
                    <p class="rsg-newsletter__field--error-text">First Name</p>
                </div>
                <div class="rsg-newsletter__field">
                    <div class="rsg-newsletter__placeholder"><label for="nl-last-name">Last Name</label></div>
                    <input type="text" id="last-name" name="nl-lastName" class="rsg-newsletter__input" aria-label="Last Name">
                    <p class="rsg-newsletter__field--error-text">Last Name Error</p>
                </div>
            </div>
            <div class="rsg-newsletter__row">
                <div class="rsg-newsletter__field rsg-newsletter__field--email">
                    <div class="rsg-newsletter__placeholder"><label for="nl-email">E-mail address</label></div>
                    <input type="email" id="email" name="nl-email" class="rsg-newsletter__input" aria-label="E-mail address">
                    <p class="rsg-newsletter__field--error-text">Error message</p>
                </div>
            </div>
        </div>
        <div class="rsg-newsletter__note-text text"><div class="cmp-text">
            <p>By submitting this form, you confirm that you have read and agreed to our&nbsp;<a href="/en/terms-and-conditions/">Terms and Conditions</a>&nbsp;and&nbsp;<a href="/en/privacy-policy/">Privacy Policy.</a></p>
        </div></div>
        <div class="rsg-newsletter__submit-container">
            <button type="submit" class="rsg-newsletter__submit-button cmp-button mod--wave-animation" data-submit-state="Submitting...">Submit</button>
        </div>
    </form>
    <div class="rsg-newsletter__success-wrapper rsg-newsletter__confirmation--hidden">
        <div class="rsg-newsletter__success-image image rsg-newsletter__image"><div class="cmp-image"><img src="/assets/002ffd70-success-circle.svg" loading="lazy" class="cmp-image__image" alt="" decoding="async"></div></div>
        <div class="rsg-newsletter__success-title text success__title"><div class="cmp-text"><p>Subscription confirmed!</p></div></div>
        <div class="rsg-newsletter__success-text text success__text"><div class="cmp-text"><p>We’ll keep you posted with our latest news and updates.</p></div></div>
        <button type="button" class="rsg-newsletter__success-button cmp-button mod--wave-animation">Subscribe Another Email</button>
    </div>
    <div class="rsg-newsletter__error-wrapper rsg-newsletter__confirmation--hidden">
        <div class="rsg-newsletter__error-image image rsg-newsletter__image"><div class="cmp-image"><img src="/assets/00f174ee-error-circle.svg" loading="lazy" class="cmp-image__image" alt="" decoding="async"></div></div>
        <div class="rsg-newsletter__error-title text error__title"><div class="cmp-text"><p>Something went wrong</p></div></div>
        <div class="rsg-newsletter__error-text text error__text"><div class="cmp-text"><p>Please try again in a moment.</p></div></div>
        <button type="button" class="rsg-newsletter__error-button cmp-button mod--wave-animation">Try Again</button>
    </div>
</div>
</div>
    </div>
</div>
<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
<!--FOOTER-->
</div>
</div>
    </div>
</div>`;
}

import { fileURLToPath } from 'node:url';
import { load } from 'cheerio';

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  if (process.argv.includes('--verify')) {
    const routes = ['/en/media-center/', ...BLOGS.map((b) => b.route)];
    for (const r of routes) {
      for (const lang of ['en', 'ar']) {
        const route = lang === 'ar' ? r.replace('/en/', '/ar/') : r;
        const html = await fs.readFile('dist' + route + 'index.html', 'utf8');
        const $ = load(html);
        const extLinks = [];
        $('a[href]').each((_, el) => {
          const h = $(el).attr('href');
          if (/^https?:\/\//i.test(h)) extLinks.push(h);
        });
        const imgs = [];
        $('main img, .rsg-hero-section img, .jab-blog-hub img, .rsg-text-and-media img').each((_, el) => {
          imgs.push($(el).attr('src'));
        });
        const inlineCtas = $('.jab-blog-inline-cta, .rsg-text-section').length;
        const internalContentLinks = $('main a, .jab-blog-hub a').length;
        const untranslated = [];
        if (lang === 'ar') {
          $('main *, .jab-blog-hub *, .rsg-hero-section *, .rsg-text-and-media *, aside *')
            .contents()
            .each((_, n) => {
              if (n.type === 'text') {
                const t = n.data.trim();
                if (t && /[A-Za-z]{4,}/.test(t)) untranslated.push(t);
              }
            });
        }
        console.log(route, {
          extLinks: extLinks.length,
          imgs: imgs.length,
          inlineCtas,
          internalContentLinks,
          untranslated
        });
      }
    }
  } else {
    // 1. Write en__media-center.html
    await fs.writeFile('source/pages/en__media-center.html', renderMediaCenterPage(), 'utf8');
    console.log('Generated source/pages/en__media-center.html');

    // 2. Write the 6 blog pages and ensure they are registered in routes.json
    const routes = JSON.parse(await fs.readFile('routes.json', 'utf8'));
    for (const blog of BLOGS) {
      await fs.writeFile('source/pages/' + blog.file, renderArticlePage(blog), 'utf8');
      console.log('Generated source/pages/' + blog.file);
      let existing = routes.find((r) => r.localRoute === blog.route);
      if (!existing) {
        routes.push({
          localRoute: blog.route,
          file: blog.file,
          title: blog.metaTitleEn,
          description: blog.excerptEn,
          bodyClass: 'page basicpage',
          styles: [
            '/assets/fddb1931-clientlib-base.lc-202609291724-lc.min.css',
            '/assets/546bb7f6-clientlib-site.min.eb79e8521c820e7406aba0b899de6bbc.css',
            '/assets/8f71aae5-clientlib-site.lc-202609291724-lc.min.css'
          ]
        });
      }
    }
    await fs.writeFile('routes.json', JSON.stringify(routes, null, 2) + '\n', 'utf8');
  }
}
