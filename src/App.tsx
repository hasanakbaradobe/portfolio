import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Globe, 
  Settings, 
  CheckCircle2, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Search,
  Rocket,
  Zap,
  ShieldCheck,
  Sun,
  Moon,
  ArrowUp
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  image: string;
}

interface Service {
  title: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  company: string;
  feedback: string;
  image: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "LeadGEN SaaS Landing Page",
    client: "Tech Startup",
    problem: "Low conversion rate on their previous landing page and high cost-per-lead.",
    solution: "Designed and developed a high-converting landing page with clear messaging and optimized CTAs.",
    result: "Increased lead generation by 3x within the first 30 days of launch.",
    tags: ["React", "Tailwind CSS", "Conversion Optimization"],
    image: "https://image.thum.io/get/width/1200/crop/675/https://websitedemos.net/saas-landing-page-04/"
  },
  {
    title: "Brikly Construction",
    client: "Construction Company",
    problem: "Outdated website that didn't reflect their 25+ years of excellence and quality.",
    solution: "Built a modern, responsive corporate website highlighting their projects and services.",
    result: "Improved brand perception and a 40% increase in online inquiries.",
    tags: ["WordPress", "Corporate", "UI/UX Design"],
    image: "https://image.thum.io/get/width/1200/crop/675/https://websitedemos.net/brikly-construction-company-04/"
  },
  {
    title: "Education Portal",
    client: "Online Academy",
    problem: "Students found it difficult to navigate courses and the platform was slow.",
    solution: "Developed a fast, user-friendly LMS frontend with intuitive course discovery.",
    result: "Student engagement increased by 50% and bounce rate dropped significantly.",
    tags: ["Next.js", "LMS", "Education"],
    image: "https://image.thum.io/get/width/1200/crop/675/https://websitedemos.net/online-courses-02/"
  },
  {
    title: "Libero X250 E-Commerce",
    client: "Electric Scooter Brand",
    problem: "Needed a sleek, modern e-commerce store to launch their new flagship scooter.",
    solution: "Created a visually striking product page with seamless checkout integration.",
    result: "Achieved $50k in sales during the first week of product launch.",
    tags: ["Shopify", "E-commerce", "Web Design"],
    image: "https://image.thum.io/get/width/1200/crop/675/https://websitedemos.net/electric-scooter-04/"
  }
];

const SERVICES: Service[] = [
  {
    title: "Custom WordPress Development",
    description: "High-performance, secure, and scalable WordPress solutions tailored to your specific business needs.",
    benefits: ["Custom-built themes (no bloat)", "Advanced custom fields for easy editing", "Security-first architecture"],
    icon: <Globe className="w-8 h-8 text-emerald-500" />
  },
  {
    title: "Business Website Development",
    description: "Professional websites designed to establish authority and convert visitors into loyal customers.",
    benefits: ["Conversion-optimized layouts", "Lightning-fast performance", "Seamless mobile experience"],
    icon: <Layout className="w-8 h-8 text-emerald-500" />
  },
  {
    title: "E-commerce Website Development",
    description: "Robust online stores that provide a frictionless shopping experience and drive sales growth.",
    benefits: ["Secure payment integrations", "Inventory management sync", "SEO-optimized product pages"],
    icon: <Smartphone className="w-8 h-8 text-emerald-500" />
  },
  {
    title: "Website Redesign & Optimization",
    description: "Transforming aging websites into modern, high-converting digital assets that perform.",
    benefits: ["Modern UI/UX refresh", "Core Web Vitals optimization", "Improved accessibility (WCAG)"],
    icon: <Zap className="w-8 h-8 text-emerald-500" />
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    company: "CEO, Bloom Digital",
    feedback: "Working with this developer was a game-changer for our agency. The attention to detail and technical expertise in custom WordPress development is unmatched. Our client was thrilled with the result.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Mark Thompson",
    company: "Founder, TechStream",
    feedback: "We needed a complex SaaS dashboard built quickly. Not only was it delivered on time, but the code quality was exceptional. A true professional who understands business goals as much as code.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
  }
];

const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PHP", "MySQL", "PostgreSQL"] },
  { category: "CMS & Tools", items: ["WordPress", "Headless CMS", "Git", "Docker", "Vite"] }
];

const PROCESS = [
  { title: "Discovery", desc: "Deep dive into your business goals, target audience, and technical requirements." },
  { title: "Planning", desc: "Creating a strategic roadmap, sitemap, and wireframes to ensure alignment." },
  { title: "Design", desc: "Crafting a unique visual identity that resonates with your brand and users." },
  { title: "Development", desc: "Writing clean, efficient, and scalable code to bring the vision to life." },
  { title: "Testing", desc: "Rigorous quality assurance across all devices and browsers for a flawless launch." },
  { title: "Launch", desc: "Deploying your new digital asset and providing ongoing support for success." }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-emerald-500" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight leading-none dark:text-white">Hasan Akbar</span>
            <span className="text-[10px] font-bold text-emerald-500 tracking-widest uppercase mt-1">Portfolio</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="#contact" 
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl"
          >
            {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, centered = false, forceLight = false }: { title: string, subtitle?: string, centered?: boolean, forceLight?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${forceLight ? 'text-slate-900 dark:text-slate-900' : 'dark:text-white'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl mx-auto ${forceLight ? 'text-slate-500 dark:text-slate-500' : 'text-slate-500 dark:text-slate-400'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-6 border border-emerald-100 dark:border-emerald-500/20">
              <Rocket className="w-4 h-4" />
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6 dark:text-white">
              Crafting <span className="text-emerald-500">High-Performance</span> Digital Experiences.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
              I help businesses and startups build scalable, custom website development solutions that drive real growth and user engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
              >
                Hire Me <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#portfolio" 
                className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80" 
                alt="Developer at work" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold dark:text-white">100%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Building the Web, One Pixel at a Time." 
                subtitle="I am a freelance web developer with over 7 years of experience in creating bespoke digital solutions for clients worldwide."
              />
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  My journey started with a passion for problem-solving and a deep curiosity about how things work under the hood. Today, I specialize in <strong>custom website development</strong> and <strong>WordPress development</strong>, helping brands bridge the gap between their vision and their digital reality.
                </p>
                <p>
                  What makes me unique is my hybrid approach: I combine technical rigor with a strong eye for UX design. I don't just write code; I build tools that help businesses scale, automate, and succeed.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">50+</div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">7+</div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg" alt="Code" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg" alt="Setup" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg" alt="Design" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-lg" alt="Workspace" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered 
            title="Specialized Services" 
            subtitle="I offer a range of website development services designed to help your business stand out in a crowded digital landscape."
            forceLight
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-white p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-3 bg-emerald-50 dark:bg-emerald-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-900">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills */}
      <section className="section-padding bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 -skew-x-12 transform translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Technical Expertise</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-lg">
                I stay at the forefront of technology to ensure your project is built with the most efficient and future-proof stack available.
              </p>
              
              <div className="space-y-10">
                {SKILLS.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span key={sIdx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-10 h-10" />, label: "Security First" },
                { icon: <Zap className="w-10 h-10" />, label: "Performance" },
                { icon: <Search className="w-10 h-10" />, label: "SEO Ready" },
                { icon: <MessageSquare className="w-10 h-10" />, label: "Support" }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center hover:border-emerald-500/50 transition-colors">
                  <div className="flex justify-center mb-4 text-emerald-500">{item.icon}</div>
                  <div className="font-bold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfolio */}
      <section id="portfolio" className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of recent work where I helped clients solve complex problems through custom website development."
          />
          
          <div className="space-y-24">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                  <div 
                    className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white dark:bg-slate-800 text-emerald-900 dark:text-emerald-400 px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                  <div className="text-emerald-500 font-mono text-sm mb-2">{project.client}</div>
                  <h3 className="text-3xl font-bold mb-6 dark:text-white">{project.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Problem</h4>
                      <p className="text-slate-600 dark:text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Solution</h4>
                      <p className="text-slate-600 dark:text-slate-300">{project.solution}</p>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">The Result</h4>
                      <p className="text-emerald-900 dark:text-emerald-300 font-medium">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:gap-4 transition-all"
                  >
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Work Process */}
      <section id="process" className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered 
            title="My Work Process" 
            subtitle="A structured approach to development ensures every project is delivered on time, within budget, and to the highest standards."
          />
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
            
            {PROCESS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 mt-4 dark:text-white">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered 
            title="Client Success Stories" 
            subtitle="Don't just take my word for it. Here's what some of my recent clients have to say about our collaboration."
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 relative"
              >
                <div className="text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-emerald-500/10 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Start Your <span className="text-emerald-500">Next Project?</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Whether you need a custom WordPress developer or a full-scale business website development partner, I'm here to help you succeed.
            </p>
            
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="inline-flex flex-col md:flex-row items-center gap-6 p-2 bg-white/5 border border-white/10 rounded-3xl md:rounded-full w-full max-w-2xl justify-between">
                <div className="flex items-center gap-4 px-8 py-4">
                  <Mail className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-lg font-medium break-all">hasanakbar.bd@gmail.com</span>
                </div>
                <a 
                  href="mailto:hasanakbar.bd@gmail.com" 
                  className="bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 whitespace-nowrap w-full md:w-auto text-center"
                >
                  Email Me
                </a>
              </div>

              <div className="inline-flex flex-col md:flex-row items-center gap-6 p-2 bg-white/5 border border-white/10 rounded-3xl md:rounded-full w-full max-w-2xl justify-between">
                <div className="flex items-center gap-4 px-8 py-4">
                  <MessageSquare className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-lg font-medium">+880 1308-773827</span>
                </div>
                <a 
                  href="https://wa.me/8801308773827" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 whitespace-nowrap w-full md:w-auto text-center"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Hasan Akbar.</p>
      </footer>

      <ScrollToTop />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
            >
              <div className="relative shrink-0 bg-slate-900 flex flex-col justify-end">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-auto max-h-[60vh] object-contain" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white z-10">
                  <div className="text-emerald-400 font-mono text-sm mb-2 font-bold tracking-wider uppercase drop-shadow-md">{selectedProject.client}</div>
                  <h3 className="text-3xl md:text-5xl font-bold drop-shadow-lg">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <Search className="w-4 h-4" /> The Challenge
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> The Solution
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{selectedProject.solution}</p>
                  </div>
                  <div className="p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4" /> The Result
                    </h4>
                    <p className="text-emerald-900 dark:text-emerald-300 font-medium leading-relaxed text-lg">{selectedProject.result}</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Tech Stack & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold border border-slate-200 dark:border-slate-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white">
                    <h4 className="font-bold mb-2">Want a similar result?</h4>
                    <p className="text-slate-400 text-sm mb-4">Let's discuss how we can transform your digital presence.</p>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedProject(null)}
                      className="block text-center bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-all"
                    >
                      Start a Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
