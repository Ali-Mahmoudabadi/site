export type Language = 'fa' | 'ar' | 'en';

export interface Project {
  title: string;
  desc: string;
  tech: string;
  iconType: 'bot' | 'home' | 'download';
}

export interface SkillProject {
  title: string;
  desc: string;
}

export interface Skill {
  title: string;
  iconType: 'quran' | 'mech' | 'english' | 'electronics' | 'robotics';
  color: string;
  projects: SkillProject[];
}

export const translations = {
  fa: {
    direction: 'rtl',
    font: 'Vazirmatn, sans-serif',
    bismillah: 'بسم الله الرحمن الرحیم',
    hadith_header: '«ارزش هر کس به اندازه چیزی است که آن را نیکو می‌داند.» (امام علی علیه‌السلام)',
    nav: {
      home: 'خانه',
      about: 'درباره من',
      skills: 'مهارت‌ها',
      projects: 'پروژه‌ها',
      contact: 'تماس',
    },
    hero: {
      name: 'علی محمودآبادی',
      tagline: 'هنرجوی مکانیک هنرستان فکور | قاری قرآن | علاقه‌مند به الکترونیک',
      cta: 'تماس با من',
      hadith: '«ارزش هر کس به اندازه چیزی است که آن را نیکو می‌داند.» (امام علی علیه‌السلام)',
    },
    about: {
      title: 'درباره من',
      age: '۱۷ ساله',
      field: 'رشته تحصیلی: مکانیک (هنرستان فکور)',
      description: 'علاقه‌مند به قرآن، الکترونیک و رباتیک (روبیکا و تلگرام).',
      languages: 'زبان‌ها: فارسی و انگلیسی (روان)',
    },
    skills: {
      title: 'مهارت‌ها',
      list: [
        { 
          title: 'تلاوت قرآن (تجوید)', 
          iconType: 'quran', 
          color: 'text-sky-blue',
          projects: [
            { title: 'جلسات آموزش تجوید', desc: 'برگزاری جلسات هفتگی آموزش تجوید و قرائت قرآن کریم.' },
            { title: 'تلاوت مجلسی', desc: 'اجرای تلاوت در محافل و مسابقات دانش‌آموزی.' }
          ]
        },
        { 
          title: 'مکانیک خودرو (پایه)', 
          iconType: 'mech', 
          color: 'text-sky-blue',
          projects: [
            { title: 'طراحی مکانیزم‌های ساده', desc: 'طراحی و تحلیل مکانیزم‌های چهار میله‌ای و چرخ‌دنده‌ها.' },
            { title: 'مدلسازی سه بعدی', desc: 'آشنایی با نرم‌افزارهای CAD برای طراحی قطعات.' }
          ]
        },
        { 
          title: 'زبان انگلیسی (روان)', 
          iconType: 'english', 
          color: 'text-sky-blue',
          projects: [
            { title: 'ترجمه متون تخصصی', desc: 'ترجمه مقالات و مستندات فنی در حوزه الکترونیک و مکانیک.' },
            { title: 'مکالمه پیشرفته', desc: 'توانایی برقراری ارتباط موثر به زبان انگلیسی.' }
          ]
        },
        { 
          title: 'الکترونیک (Arduino, ESP)', 
          iconType: 'electronics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'خانه هوشمند', desc: 'کنترل لوازم خانگی با استفاده از ماژول‌های ESP و اینترنت اشیاء.' },
            { title: 'سیستم مانیتورینگ دما', desc: 'ثبت و نمایش دما و رطوبت محیط به صورت آنلاین.' }
          ]
        },
        { 
          title: 'رباتیک (روبیکا و تلگرام)', 
          iconType: 'robotics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'ربات مدیریت گروه', desc: 'توسعه ربات‌های پیشرفته برای مدیریت گروه‌های روبیکا و تلگرام.' },
            { title: 'ربات دانلودر', desc: 'ساخت ابزارهایی برای دانلود خودکار محتوا از شبکه‌های اجتماعی.' }
          ]
        },
      ] as Skill[],
    },
    projects: {
      title: 'پروژه‌ها',
      list: [
        {
          title: 'ربات مدیریت گروه روبیکا',
          desc: 'یک ربات هوشمند برای مدیریت گروه‌های بزرگ در پیام‌رسان روبیکا با قابلیت‌های ضد‌اسپم.',
          tech: 'Python, Rubika API',
          iconType: 'bot',
        },
        {
          title: 'سیستم کنترل خانه هوشمند با ESP',
          desc: 'پروژه‌ای برای کنترل روشنایی و دما از طریق اینترنت با استفاده از ماژول ESP8266.',
          tech: 'C++, Arduino, ESP8266',
          iconType: 'home',
        },
        {
          title: 'ربات دانلودر مدیا',
          desc: 'رباتی برای دانلود خودکار ویدیو و عکس از پلتفرم‌های مختلف اجتماعی.',
          tech: 'Python, API Integration',
          iconType: 'download',
        },
      ] as Project[],
    },
    contact: {
      title: 'تماس با من',
      email: 'ایمیل',
      telegram: 'تلگرام',
      form_name: 'نام',
      form_email: 'ایمیل',
      form_message: 'پیام',
      send: 'ارسال پیام',
    },
  },
  ar: {
    direction: 'rtl',
    font: 'Amiri, sans-serif',
    bismillah: 'بسم الله الرحمن الرحيم',
    hadith_header: '«قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ.» (الإمام علي عليه السلام)',
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل بي',
    },
    hero: {
      name: 'علي محمودآبادي',
      tagline: 'طالب ميكانيكا في مدرسة فكور المهنية | قارئ للقرآن | متحمس للإلكترونيات',
      cta: 'تواصل معي',
      hadith: '«قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ.» (الإمام علي عليه السلام)',
    },
    about: {
      title: 'عني',
      age: '١٧ سنة',
      field: 'مجال الدراسة: ميكانيكا السيارات (مدرسة فكور)',
      description: 'مهتم بالقرآن، الإلكترونيات والروبوتات (روبيكا وتيليجرام).',
      languages: 'اللغات: الفارسية والإنجليزية (بطلاقة)',
    },
    skills: {
      title: 'المهارات',
      list: [
        { 
          title: 'تلاوت قرآن (التجويد)', 
          iconType: 'quran', 
          color: 'text-sky-blue',
          projects: [
            { title: 'جلسات تعليم التجويد', desc: 'عقد جلسات أسبوعية لتعليم التجويد وقراءة القرآن الكريم.' },
            { title: 'تلاوات في المحافل', desc: 'أداء التلاوات في التجمعات والمسابقات الطلابية.' }
          ]
        },
        { 
          title: 'ميكانيكا السيارات (أساسي)', 
          iconType: 'mech', 
          color: 'text-sky-blue',
          projects: [
            { title: 'تصميم الآليات البسيطة', desc: 'تصميم وتحليل الآليات ذات الأربعة قضبان والتروس.' },
            { title: 'النمذجة ثلاثية الأبعاد', desc: 'الإلمام ببرامج CAD لتصميم الأجزاء.' }
          ]
        },
        { 
          title: 'اللغة الإنجليزية (بطلاقة)', 
          iconType: 'english', 
          color: 'text-sky-blue',
          projects: [
            { title: 'ترجمة النصوص التقنية', desc: 'ترجمة المقالات والوثائق الفنية في مجال الإلكترونيات والميكانيكا.' },
            { title: 'محادثة متقدمة', desc: 'القدرة على التواصل بفعالية باللغة الإنجليزية.' }
          ]
        },
        { 
          title: 'الإلكترونيات (Arduino, ESP)', 
          iconType: 'electronics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'المنزل الذكي', desc: 'التحكم في الأجهزة المنزلية باستخدام وحدات ESP وإنترنت الأشياء.' },
            { title: 'نظام مراقبة درجة الحرارة', desc: 'تسجيل وعرض درجة الحرارة والرطوبة عبر الإنترنت.' }
          ]
        },
        { 
          title: 'الروبوتات (روبيكا وتيليجرام)', 
          iconType: 'robotics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'بوت إدارة المجموعات', desc: 'تطوير بوتات متقدمة لإدارة مجموعات روبيكا وتيليجرام.' },
            { title: 'بوت التحميل', desc: 'إنشاء أدوات لتحميل المحتوى تلقائيًا من الشبكات الاجتماعية.' }
          ]
        },
      ] as Skill[],
    },
    projects: {
      title: 'المشاريع',
      list: [
        {
          title: 'بوت إدارة مجموعة روبيكا',
          desc: 'بوت ذكي لإدارة المجموعات الكبيرة في تطبيق روبيكا مع ميزات مكافحة البريد العشوائي.',
          tech: 'Python, Rubika API',
          iconType: 'bot',
        },
        {
          title: 'نظام التحكم في المنزل الذكي ESP',
          desc: 'مشروع للتحكم في الإضاءة ودرجة الحرارة عبر الإنترنت باستخدام وحدة ESP8266.',
          tech: 'C++, Arduino, ESP8266',
          iconType: 'home',
        },
        {
          title: 'بوت تحميل الوسائط',
          desc: 'بوت لتحميل الفيديوهات والصور تلقائيًا من منصات التواصل الاجتماعي المختلفة.',
          tech: 'Python, API Integration',
          iconType: 'download',
        },
      ] as Project[],
    },
    contact: {
      title: 'اتصل بي',
      email: 'البريد الإلكتروني',
      telegram: 'تيليجرام',
      form_name: 'الاسم',
      form_email: 'البريد الإلكتروني',
      form_message: 'الرسالة',
      send: 'إرسال الرسالة',
    },
  },
  en: {
    direction: 'ltr',
    font: 'Poppins, sans-serif',
    bismillah: 'In the Name of God, the Compassionate, the Merciful',
    hadith_header: '"The value of every man is what he does well." (Imam Ali AS)',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Ali Mahmoudabadi',
      tagline: 'Mechanical Student at Fakoor Vocational School | Quran Reciter | Electronics Enthusiast',
      cta: 'Contact Me',
      hadith: '"The value of every man is what he does well." (Imam Ali AS)',
    },
    about: {
      title: 'About Me',
      age: '17 Years Old',
      field: 'Field of Study: Automotive Mechanics (Fakoor School)',
      description: 'Interested in Quran, electronics, and robotics (Rubika & Telegram).',
      languages: 'Languages: Persian & English (Fluent)',
    },
    skills: {
      title: 'Skills',
      list: [
        { 
          title: 'Quran Recitation (Tajweed)', 
          iconType: 'quran', 
          color: 'text-sky-blue',
          projects: [
            { title: 'Tajweed Classes', desc: 'Holding weekly sessions for teaching Tajweed and Quran recitation.' },
            { title: 'Public Recitation', desc: 'Performing recitations in gatherings and student competitions.' }
          ]
        },
        { 
          title: 'Automotive Mechanics (Basic)', 
          iconType: 'mech', 
          color: 'text-sky-blue',
          projects: [
            { title: 'Mechanism Design', desc: 'Design and analysis of four-bar linkages and gears.' },
            { title: '3D Modeling', desc: 'Familiarity with CAD software for part design.' }
          ]
        },
        { 
          title: 'English Language (Fluent)', 
          iconType: 'english', 
          color: 'text-sky-blue',
          projects: [
            { title: 'Technical Translation', desc: 'Translating technical articles and documents in electronics and mechanics.' },
            { title: 'Advanced Conversation', desc: 'Ability to communicate effectively in English.' }
          ]
        },
        { 
          title: 'Electronics (Arduino, ESP)', 
          iconType: 'electronics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'Smart Home', desc: 'Controlling home appliances using ESP modules and IoT.' },
            { title: 'Temp Monitoring', desc: 'Logging and displaying ambient temperature and humidity online.' }
          ]
        },
        { 
          title: 'Robotics (Rubika & Telegram)', 
          iconType: 'robotics', 
          color: 'text-sky-blue',
          projects: [
            { title: 'Group Management Bot', desc: 'Developing advanced bots for managing Rubika and Telegram groups.' },
            { title: 'Downloader Bot', desc: 'Creating tools to automatically download content from social networks.' }
          ]
        },
      ] as Skill[],
    },
    projects: {
      title: 'Projects',
      list: [
        {
          title: 'Rubika Group Management Bot',
          desc: 'A smart bot for managing large groups on Rubika messenger with anti-spam capabilities.',
          tech: 'Python, Rubika API',
          iconType: 'bot',
        },
        {
          title: 'Smart Home Control with ESP',
          desc: 'A project to control lighting and temperature over the internet using ESP8266 module.',
          tech: 'C++, Arduino, ESP8266',
          iconType: 'home',
        },
        {
          title: 'Media Downloader Bot',
          desc: 'A bot to automatically download videos and photos from various social platforms.',
          tech: 'Python, API Integration',
          iconType: 'download',
        },
      ] as Project[],
    },
    contact: {
      title: 'Contact Me',
      email: 'Email',
      telegram: 'Telegram',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      send: 'Send Message',
    },
  },
};
