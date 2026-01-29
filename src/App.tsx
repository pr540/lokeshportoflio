import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Smartphone, 
  Globe, 
  Database,
  Terminal,
  ChevronRight,
  Download
} from 'lucide-react';
import { useState } from 'react';

const RESUME_DATA = {
  name: "Lokesh Gandam",
  title: "Full Stack Developer",
  contact: {
    email: "lokeshgandhamshr@gmail.com",
    phone: "+91-9133723123",
    location: "Hyderabad, Telangana",
    linkedin: "#",
    github: "#"
  },
  objective: "Dynamic full-stack developer with 2 years of hands-on experience in building responsive web applications with Next.js and cross-platform mobile apps using React Native. Proven ability to deliver user-friendly, performant solutions in agile environments.",
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "Python", "C/C++", "SQL"],
    frontend: ["React", "Next.js", "React Native", "Angular", "TailwindCSS", "Material-UI", "Redux Toolkit", "Framer Motion"],
    backend: ["Spring Boot", "FastAPI", "REST APIs"],
    mobile: ["React Native", "Expo", "React Native Web"],
    database: ["MySQL"],
    tools: ["Vite", "Axios", "NextAuth", "Zustand", "TanStack Query", "Git"]
  },
  experience: [
    {
      company: "Headway DataSystems",
      role: "Full Stack Developer",
      period: "2023 - Oct 2025",
      description: "Working at a fast-paced startup, specializing in building responsive web applications and cross-platform mobile apps."
    }
  ],
  education: [
    {
      institution: "Gokaraju Rangaraju Institute of Engineering and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2019 - 2023",
      stats: "GPA: 7.56/10.00"
    },
    {
      institution: "Sri Chaitanya Junior Kalasala",
      degree: "MPC",
      period: "2015 - 2017",
      stats: "Grade: 94.6%"
    }
  ],
  projects: [
    {
      title: "iHeal PWA",
      description: "Health and wellness content management web application with RBAC.",
      tools: ["Next.js", "React", "TypeScript", "TailwindCSS", "TanStack Query", "Zustand"],
      highlights: [
        "Architected RBAC system for Admin, Moderator, and User roles",
        "Implemented NextAuth security for session management",
        "Created content editors for articles, videos, and audio content"
      ]
    },
    {
      title: "iHeal Mobile App",
      description: "Cross-platform health and wellness application with auth and onboarding.",
      tools: ["React Native", "Expo", "TypeScript", "AWS Amplify", "Firebase"],
      highlights: [
        "Built authentication flow with OTP verification",
        "Created 15+ health assessment screens",
        "Integrated AWS Amplify and Firebase services"
      ]
    },
    {
      title: "Jayashankar Group",
      description: "Corporate Website for Industrial Conglomerate.",
      tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      highlights: [
        "Implemented 25+ dynamic pages with smooth transitions",
        "Designed responsive UI using Radix UI and Tailwind CSS",
        "Engineered reusable component architecture"
      ]
    },
    {
      title: "Pharmetrade",
      description: "B2B Pharmaceutical E-commerce Platform.",
      tools: ["React", "Vite", "Redux Toolkit", "Material-UI", "Chart.js"],
      highlights: [
        "Developed multi-role user management system",
        "Created 20+ screens for product management and checkout",
        "Implemented seller dashboard with earnings analytics"
      ]
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-950 bg-grid relative overflow-x-hidden">
      {/* Dev Background Pattern */}
      <div className="fixed inset-0 bg-dev-pattern pointer-events-none z-0"></div>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 glass-morphism border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold font-display text-gradient"
            >
              LG.
            </motion.span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="Lokesh_Resume (1).pdf"
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-full text-sm font-semibold transition-all"
            >
              <Download size={16} /> Resume
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        {/* Background Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/hero.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-8 inline-block backdrop-blur-md">
              Available for Hire
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold font-display mb-8 tracking-tight">
              Hi, I'm <span className="text-gradient">Lokesh Gandam</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              {RESUME_DATA.objective}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-primary-600 hover:bg-primary-500 px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary-500/25 text-lg"
              >
                View My Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold transition-all border border-white/10 text-lg"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary-500 to-transparent"></div>
        </div>
      </section>

      {/* Stats/Experience Summary */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl glass-morphism">
            <h3 className="text-4xl font-bold text-primary-400 mb-2">2+</h3>
            <p className="text-slate-400">Years Experience</p>
          </div>
          <div className="p-8 rounded-2xl glass-morphism">
            <h3 className="text-4xl font-bold text-primary-400 mb-2">4+</h3>
            <p className="text-slate-400">Projects Delivered</p>
          </div>
          <div className="p-8 rounded-2xl glass-morphism">
            <h3 className="text-4xl font-bold text-primary-400 mb-2">5+</h3>
            <p className="text-slate-400">Core Technologies</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-morphism rounded-3xl overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-400">
                      {project.title.includes('App') ? <Smartphone size={24} /> : <Globe size={24} />}
                    </div>
                    <a href="#" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                      <ExternalLink size={20} className="text-slate-400 hover:text-white" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight size={16} className="text-primary-500 mt-0.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Technical Prowess</h2>
            <p className="text-slate-400">A comprehensive toolkit for modern development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              title="Frontend" 
              icon={<Code2 className="text-blue-400" />}
              skills={RESUME_DATA.skills.frontend}
            />
             <SkillCard 
              title="Backend" 
              icon={<Terminal className="text-green-400" />}
              skills={RESUME_DATA.skills.backend}
            />
             <SkillCard 
              title="Mobile & DB" 
              icon={<Smartphone className="text-purple-400" />}
              skills={[...RESUME_DATA.skills.mobile, ...RESUME_DATA.skills.database]}
            />
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-400">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-bold font-display">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                   <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-950 text-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-morphism">
                    <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-slate-100">{exp.role}</div>
                        <time className="text-xs font-semibold text-primary-400 uppercase">{exp.period}</time>
                    </div>
                    <div className="text-primary-500 text-sm font-semibold mb-2">{exp.company}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{exp.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-400">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold font-display">Education</h2>
            </div>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-morphism border-l-4 border-primary-500">
                   <div className="text-xs font-bold text-primary-400 uppercase mb-1">{edu.period}</div>
                   <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                   <div className="text-slate-200 text-sm mb-2">{edu.degree}</div>
                   <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-xs font-bold text-slate-300">
                    {edu.stats}
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="glass-morphism rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-primary-500" />
            
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's Build Something Great</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Currently open to new opportunities. Feel free to reach out for collaborations or just a friendly hello!
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              <ContactItem 
                icon={<Mail size={24} />} 
                label="Email" 
                value={RESUME_DATA.contact.email} 
                href={`mailto:${RESUME_DATA.contact.email}`}
              />
              <ContactItem 
                icon={<Phone size={24} />} 
                label="Phone" 
                value={RESUME_DATA.contact.phone} 
                href={`tel:${RESUME_DATA.contact.phone}`}
              />
              <ContactItem 
                icon={<Linkedin size={24} />} 
                label="LinkedIn" 
                value="Lokesh Gandam" 
                href={RESUME_DATA.contact.linkedin}
              />
            </div>

            <div className="flex justify-center gap-6">
              <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all">
                <Github size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all">
                <Linkedin size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href={`mailto:${RESUME_DATA.contact.email}`} className="p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all">
                <Mail size={28} />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-2xl font-bold font-display text-gradient">LG.</span>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lokesh Gandam. Built with React & Framer Motion.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, skills }: { title: string, icon: React.ReactNode, skills: string[] }) {
  return (
    <div className="p-8 rounded-3xl glass-morphism hover:border-primary-500/50 transition-all group">
      <div className="mb-6 flex items-center justify-between">
        <div className="p-3 bg-slate-800 rounded-2xl group-hover:bg-primary-500/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-xl text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a href={href} className="group text-left">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all">
          {icon}
        </div>
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</p>
          <p className="font-semibold text-slate-200 group-hover:text-primary-400 transition-colors">{value}</p>
        </div>
      </div>
    </a>
  );
}

export default App;
