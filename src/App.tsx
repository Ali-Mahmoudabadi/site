import { useState, useEffect } from 'react';
import { translations, Language, Skill } from './translations';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Mail, 
  Send, 
  Cpu, 
  BookOpen, 
  Bot, 
  Code, 
  Wrench, 
  Menu, 
  X,
  Github,
  Linkedin,
  Home,
  Download,
  Terminal,
  Database,
  Server,
  Layers
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.direction;
    document.documentElement.lang = lang;
  }, [lang, t.direction]);

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
    setIsMenuOpen(false);
  };

  const fontClass = lang === 'fa' ? 'font-vazir' : lang === 'ar' ? 'font-amiri' : 'font-poppins';

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-deep-blue text-text-light ${fontClass} overflow-x-hidden transition-all duration-300`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-blue/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Bismillah & Hadith */}
            <div className="flex flex-col">
              <div className="text-sky-blue font-amiri text-lg md:text-xl font-bold whitespace-nowrap">
                {t.bismillah}
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-sky-blue transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-sky-blue transition-colors">
                  <Globe size={20} />
                  <span className="uppercase">{lang}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-deep-blue border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50">
                  <button onClick={() => toggleLanguage('fa')} className={`block w-full text-right px-4 py-2 hover:bg-white/5 ${lang === 'fa' ? 'text-sky-blue' : ''}`}>فارسی</button>
                  <button onClick={() => toggleLanguage('ar')} className={`block w-full text-right px-4 py-2 hover:bg-white/5 ${lang === 'ar' ? 'text-sky-blue' : ''}`}>العربية</button>
                  <button onClick={() => toggleLanguage('en')} className={`block w-full text-left px-4 py-2 hover:bg-white/5 ${lang === 'en' ? 'text-sky-blue' : ''}`}>English</button>
                </div>
              </div>

              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-deep-blue border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-start hover:text-sky-blue transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-blue/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-sky-blue to-deep-blue p-1 shadow-lg shadow-sky-blue/20">
                <div className="w-full h-full rounded-full bg-deep-blue flex items-center justify-center overflow-hidden">
                   {/* Placeholder for Avatar */}
                   <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                {t.hero.name}
              </h1>
              
              {/* Hadith */}
              <div className="mb-6 inline-block max-w-3xl">
                <p className="text-sky-blue italic text-lg md:text-xl font-amiri leading-relaxed">
                  {t.hero.hadith}
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.hero.tagline}
              </p>
              
              <div className="block">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-sky-blue hover:bg-sky-blue-light text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-sky-blue/20 hover:shadow-sky-blue/40"
                >
                  {t.hero.cta}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-center text-sky-blue flex items-center justify-center gap-3">
                <BookOpen className="w-8 h-8" />
                {t.about.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-blue/30 transition-colors">
                    <p className="mb-2 text-sky-blue font-bold">{t.about.age}</p>
                    <p>{t.about.field}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-blue/30 transition-colors">
                    <p>{t.about.languages}</p>
                  </div>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <p className="leading-relaxed text-lg">
                    {t.about.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-blue flex items-center justify-center gap-3">
              <Cpu className="w-8 h-8" />
              {t.skills.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {t.skills.list.map((skill, index) => {
                const Icon = {
                  quran: BookOpen,
                  mech: Wrench,
                  english: Globe,
                  electronics: Cpu,
                  robotics: Bot
                }[skill.iconType];

                return (
                  <motion.div
                    key={index}
                    onClick={() => setSelectedSkill(skill)}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    className="cursor-pointer p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-sky-blue/50 transition-all group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-sky-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`mb-4 w-12 h-12 rounded-lg bg-sky-blue/10 flex items-center justify-center ${skill.color} group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300`}>
                      <Icon />
                    </div>
                    <h3 className="font-medium text-lg relative z-10">{skill.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-blue flex items-center justify-center gap-3">
              <Code className="w-8 h-8" />
              {t.projects.title}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.projects.list.map((project, index) => {
                const ProjectIcon = {
                  bot: Bot,
                  home: Home,
                  download: Download
                }[project.iconType];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-deep-blue border border-white/10 hover:border-sky-blue/50 transition-all hover:shadow-2xl hover:shadow-sky-blue/10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-blue/90 z-10" />
                    <div className="h-48 bg-white/5 flex items-center justify-center text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                      <ProjectIcon />
                    </div>
                    <div className="relative z-20 p-6 -mt-20">
                      <div className="w-12 h-12 rounded-full bg-sky-blue flex items-center justify-center text-white mb-4 shadow-lg">
                        <Code size={20} />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <ProjectIcon className="text-sky-blue w-6 h-6" />
                        <h3 className="text-xl font-bold group-hover:text-sky-blue transition-colors">{project.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(',').map((tech, i) => (
                          <span key={i} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-sky-blue/10 text-sky-blue border border-sky-blue/20 hover:bg-sky-blue/20 transition-colors">
                            <Terminal size={12} />
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-blue flex items-center justify-center gap-3">
              <Mail className="w-8 h-8" />
              {t.contact.title}
            </h2>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-blue/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-sky-blue">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{t.contact.email}</p>
                    <p className="font-medium">aliali123451387@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-blue/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-blue/20 flex items-center justify-center text-sky-blue">
                    <Send />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{t.contact.telegram}</p>
                    <p className="font-medium">@WasTrader</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">{t.contact.form_name}</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">{t.contact.form_email}</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-400">{t.contact.form_message}</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-blue transition-colors"
                  ></textarea>
                </div>
                <button className="w-full bg-sky-blue hover:bg-sky-blue-light text-white font-medium py-3 rounded-lg transition-colors shadow-lg shadow-sky-blue/20">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-deep-blue border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Ali Mahmoudabadi. All rights reserved.</p>
        </div>
      </footer>

      {/* Skill Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-deep-blue border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 left-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-sky-blue/10 flex items-center justify-center text-sky-blue">
                    {(() => {
                      const Icon = {
                        quran: BookOpen,
                        mech: Wrench,
                        english: Globe,
                        electronics: Cpu,
                        robotics: Bot
                      }[selectedSkill.iconType];
                      return <Icon size={32} />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedSkill.title}</h3>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-sky-blue border-b border-white/10 pb-2">
                    {t.projects.title}
                  </h4>
                  
                  {selectedSkill.projects && selectedSkill.projects.length > 0 ? (
                    <div className="grid gap-4">
                      {selectedSkill.projects.map((proj, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-sky-blue/30 transition-colors">
                          <h5 className="font-bold mb-2">{proj.title}</h5>
                          <p className="text-gray-400 text-sm">{proj.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No specific projects listed for this skill.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
