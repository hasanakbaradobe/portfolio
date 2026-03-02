import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ShieldCheck
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
    title: "E-commerce Transformation",
    client: "Luxury Boutique",
    problem: "Outdated platform with 4-second load times and poor mobile conversion rates.",
    solution: "Built a custom headless Shopify storefront using React and Node.js with optimized image delivery.",
    result: "Load times dropped to 0.8s, and mobile conversion increased by 45% in the first quarter.",
    tags: ["React", "Shopify", "Node.js", "Tailwind"],
    image: "https://picsum.photos/seed/shop/800/600"
  },
  {
    title: "SaaS Dashboard Redesign",
    client: "FinTech Startup",
    problem: "Users struggled to navigate complex financial data, leading to high support ticket volume.",
    solution: "Implemented a clean, modular dashboard architecture with intuitive data visualization using D3.js.",
    result: "Support tickets related to navigation dropped by 60%, and user engagement time increased by 30%.",
    tags: ["TypeScript", "D3.js", "Dashboard", "UX Design"],
    image: "https://picsum.photos/seed/fintech/800/600"
  },
  {
    title: "Corporate Identity Hub",
    client: "Global Logistics Firm",
    problem: "Fragmented web presence across different regions causing brand inconsistency.",
    solution: "Developed a centralized WordPress multisite network with a custom-built, high-performance theme.",
    result: "Unified brand voice across 12 regions and reduced maintenance costs by 40%.",
    tags: ["WordPress", "PHP", "Multisite", "SEO"],
    image: "https://picsum.photos/seed/logistics/800/600"
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
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Mark Thompson",
    company: "Founder, TechStream",
    feedback: "We needed a complex SaaS dashboard built quickly. Not only was it delivered on time, but the code quality was exceptional. A true professional who understands business goals as much as code.",
    image: "https://picsum.photos/seed/mark/100/100"
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-emerald-500" />
          <span className="text-xl font-bold tracking-tight">DevCraft</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-600 hover:text-emerald-500 transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl"
          >
            {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600"
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

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-500 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-6 border border-emerald-100">
              <Rocket className="w-4 h-4" />
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6">
              Crafting <span className="text-emerald-500">High-Performance</span> Digital Experiences.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
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
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all"
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
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/developer/800/1000" 
                alt="Developer at work" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="section-padding bg-white">
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
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  My journey started with a passion for problem-solving and a deep curiosity about how things work under the hood. Today, I specialize in <strong>custom website development</strong> and <strong>WordPress development</strong>, helping brands bridge the gap between their vision and their digital reality.
                </p>
                <p>
                  What makes me unique is my hybrid approach: I combine technical rigor with a strong eye for UX design. I don't just write code; I build tools that help businesses scale, automate, and succeed.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">50+</div>
                  <div className="text-sm font-medium text-slate-500">Projects Completed</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-bold text-emerald-500 mb-1">7+</div>
                  <div className="text-sm font-medium text-slate-500">Years Experience</div>
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
                <img src="https://picsum.photos/seed/code1/400/500" className="rounded-2xl shadow-lg" alt="Code" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/code2/400/300" className="rounded-2xl shadow-lg" alt="Setup" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/code3/400/300" className="rounded-2xl shadow-lg" alt="Design" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/code4/400/500" className="rounded-2xl shadow-lg" alt="Coffee" referrerPolicy="no-referrer" />
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
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-3 bg-emerald-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
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
      <section id="portfolio" className="section-padding bg-white">
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
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <div className={idx % 2 !== 0 ? 'md:order-1' : ''}>
                  <div className="text-emerald-500 font-mono text-sm mb-2">{project.client}</div>
                  <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Problem</h4>
                      <p className="text-slate-600">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Solution</h4>
                      <p className="text-slate-600">{project.solution}</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">The Result</h4>
                      <p className="text-emerald-900 font-medium">{project.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Work Process */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            centered 
            title="My Work Process" 
            subtitle="A structured approach to development ensures every project is delivered on time, within budget, and to the highest standards."
          />
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
            
            {PROCESS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold mb-4 mt-4">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section-padding bg-white">
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
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 relative"
              >
                <div className="text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.company}</div>
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
            
            <div className="inline-flex flex-col md:flex-row items-center gap-6 p-2 bg-white/5 border border-white/10 rounded-3xl md:rounded-full">
              <div className="flex items-center gap-4 px-8 py-4">
                <Mail className="w-6 h-6 text-emerald-500" />
                <span className="text-lg font-medium">hello@devcraft.com</span>
              </div>
              <a 
                href="mailto:hello@devcraft.com" 
                className="bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20"
              >
                Get a Free Quote
              </a>
            </div>
            
            <div className="mt-16 flex justify-center gap-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-slate-100 bg-white text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} DevCraft Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
