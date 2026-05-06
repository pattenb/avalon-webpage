/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Beaker, 
  Users, 
  Layers, 
  Lightbulb, 
  ChevronRight, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  status: 'Present' | 'Past';
  description: string;
  image: string;
  tags: string[];
}

interface Researcher {
  name: string;
  role: string;
  specialty: string;
  image: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 'avalon',
    title: 'AVALON',
    status: 'Present',
    description: 'Advanced Vision and Logic ON-chip. Focusing on the next generation of neuromorphic and programmable photonic circuits for extreme efficiency.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['SBO', 'Silicon Photonics', 'AI Hardware']
  },
  {
    id: 'proceed',
    title: 'PROCEED',
    status: 'Past',
    description: 'Precision Photonics for Communication and Sensing. This project laid the groundwork for high-yield silicon-on-insulator (SOI) fabrication processes.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Completed', 'Communications', 'Sensing']
  }
];

const RESEARCHERS: Researcher[] = [
  {
    name: 'Prof. Roel Baets',
    role: 'Lead Project Supervisor',
    specialty: 'Silicon Photonics & Bio-Photonics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Prof. Dries Van Thourhout',
    role: 'Principal Investigator',
    specialty: 'Hybrid Integration & Laser Sources',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Prof. Gunther Roelkens',
    role: 'Technology Integration Lead',
    specialty: 'III-V on Silicon Integration',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Prof. Nicolas Le Thomas',
    role: 'Metrology Specialist',
    specialty: 'Nanophotonics & Spectroscopy',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400'
  }
];

// --- Components ---

const AvalonLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative ${className} flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Background Triangle */}
      <path d="M 50 15 L 85 75 L 15 75 Z" fill="#0f172a" />
      
      {/* Laser Beams */}
      <line x1="5" y1="30" x2="50" y2="55" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" /> {/* Red */}
      <line x1="50" y1="5" x2="50" y2="55" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />  {/* Green */}
      <line x1="95" y1="30" x2="50" y2="55" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" /> {/* Blue */}
      
      {/* Converging point - Cluster */}
      <circle cx="50" cy="55" r="5" fill="white" className="animate-pulse" />
      <circle cx="50" cy="55" r="8" fill="white" fillOpacity="0.3" />
      
      {/* Small laser head points */}
      <circle cx="5" cy="30" r="2" fill="#ef4444" />
      <circle cx="50" cy="5" r="2" fill="#22c55e" />
      <circle cx="95" cy="30" r="2" fill="#3b82f6" />
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Consortium', href: '#consortium' },
    { name: 'Publications', href: '#publications' },
    { name: 'Repository', href: '#repository' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AvalonLogo className="w-10 h-10" />
          <div>
            <span className={`font-bold text-xl tracking-tight block ${scrolled ? 'text-blue-900' : 'text-blue-900'}`}>AVALON</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold block leading-none">SBO Project</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
             {/* Text-based Logos for UGent and FWO */}
             <div className="flex flex-col items-center">
               <span className="text-[10px] font-bold text-blue-800 leading-none">UGENT</span>
               <div className="h-[1px] w-full bg-blue-800 my-[2px]"></div>
               <span className="text-[8px] font-bold text-blue-800 leading-none">PHOTONICS</span>
             </div>
             <div className="flex flex-col items-center border-l border-slate-200 pl-4">
               <span className="text-[10px] font-bold text-blue-900 leading-none">fwo</span>
               <span className="text-[8px] text-slate-500 leading-none">Flanders</span>
             </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-blue-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-800"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-900">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <AvalonLogo className="w-24 h-24" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            AVALON <br />
            <span className="text-blue-900">An innovative SBO project</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
            Bridging the gap between fundamental light physics and scalable industrial hardware. Founded at the Photonics Research Group, Ghent University.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#objectives" className="px-8 py-4 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2">
              Explore Our Objectives <ChevronRight size={18} />
            </a>
            <a href="#collaboration" className="px-8 py-4 bg-white text-blue-900 border border-blue-200 rounded-lg font-bold hover:border-blue-400 transition-all">
              Partner With Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://lh3.googleusercontent.com/d/1pgtwJ0ve5R4k5EAxI21KJ1FyotCYBXPw" 
              alt="Silicon Photonic Experiment" 
              referrerPolicy="no-referrer"
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('unsplash.com')) {
                  target.src = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1200";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <span className="block text-sm font-semibold uppercase tracking-widest opacity-80 mb-1 leading-none">Ghent University</span>
              <span className="text-2xl font-bold">Research Portal</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ObjectivesSection = () => {
  return (
    <section id="objectives" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-900 font-bold tracking-widest uppercase text-xs">Mission</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Project Objectives</h2>
            <p className="text-slate-600">The AVALON project aims to revolutionize silicon photonics through specific strategic goals funded by SBO.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title} Scope</h3>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${project.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-medium text-slate-500 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-900 font-bold hover:gap-3 transition-all group-hover:text-blue-700">
                  Read Full Objectives <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PARTNERS = [
  {
    name: 'imec',
    url: 'https://www.imec-int.com',
    logo: 'https://lh3.googleusercontent.com/d/1wfQOrH_4R6Gc7F6xZLsuSkBZLTcQ90G3',
    fallback: '/input_file_6.png'
  },
  {
    name: 'Ghent University',
    url: 'https://www.ugent.be',
    logo: 'https://lh3.googleusercontent.com/d/1k_IgKqJc9ZA7eCkwoEm8BY8JYlbly2Iw',
    fallback: '/input_file_3.png'
  },
  {
    name: 'KU Leuven',
    url: 'https://www.kuleuven.be',
    logo: 'https://lh3.googleusercontent.com/d/19qu8WLbpWo3zjEeeAS2LHoIV9Pf2lBAz',
    fallback: '/input_file_5.png'
  },
  {
    name: 'UHasselt',
    url: 'https://www.uhasselt.be',
    logo: 'https://lh3.googleusercontent.com/d/1__swiiNmjw9_bxTCYCVA2wooKEBih0U4',
    fallback: '/input_file_2.png'
  },
  {
    name: 'IMO-IMOMEC',
    url: 'https://www.uhasselt.be/imo-imomec',
    logo: '/input_file_4.png',
    fallback: 'https://www.uhasselt.be/media/3vclsn3r/imo-imomec-logo-rgb.jpg'
  },
  {
    name: 'University of Antwerp',
    url: 'https://www.uantwerpen.be',
    logo: 'https://logo.clearbit.com/uantwerpen.be',
    fallback: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/University_of_Antwerp_logo.svg/512px-University_of_Antwerp_logo.svg.png'
  },
  {
    name: 'FWO',
    url: 'https://www.fwo.be',
    logo: 'https://lh3.googleusercontent.com/d/15q-JLYBLmD8IFuMUDTjR2QPIslFNOyVM',
    fallback: '/input_file_1.png'
  }
];

const PartnerLogo = ({ partner }: { partner: typeof PARTNERS[0] }) => {
  const [imgSrc, setImgSrc] = useState(partner.logo);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(partner.logo);
    setErrorCount(0);
  }, [partner.logo]);
  
  return (
    <div className="h-24 w-full flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group">
      {errorCount >= 2 ? (
        <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center leading-tight">
          {partner.name}
        </div>
      ) : (
        <img 
          src={imgSrc} 
          alt={partner.name} 
          referrerPolicy="no-referrer"
          onError={() => {
            if (errorCount === 0 && partner.fallback) {
              setImgSrc(partner.fallback);
              setErrorCount(1);
            } else {
              setErrorCount(2);
            }
          }}
          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
        />
      )}
    </div>
  );
};

const ConsortiumSection = () => {
  return (
    <section id="consortium" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-900 font-bold tracking-widest uppercase text-xs">Stronger Together</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Project Consortium</h2>
          <p className="mt-4 text-slate-600">A collaborative network of leading academic and industrial research groups.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center mb-32">
          {PARTNERS.map((partner, idx) => (
            <motion.a 
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <PartnerLogo partner={partner} />
            </motion.a>
          ))}
        </div>

        {/* Project Leadership Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-blue-900 font-bold tracking-widest uppercase text-xs">Leadership</span>
            <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-6">Project Coordination</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Under the guidance of leading experts in Silicon Photonics, the AVALON project is strategically managed to ensure the highest research quality and industrial relevance. Our coordination team bridges the gap between different consortium partners and funding bodies.
            </p>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Get in touch with the lead</p>
                <a href="mailto:coordination@avalon-sbo.be" className="text-blue-900 font-medium">coordination@avalon-sbo.be</a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2" />
              <img 
                src="/input_file_0.png" 
                alt="Project Leader" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // fallback to a high quality lab image
                  target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
                }}
                className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white">
                <p className="font-bold text-slate-900">Project Leader</p>
                <p className="text-xs text-blue-900 font-semibold uppercase tracking-wider">AVALON SBO Consortium</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 p-8 bg-blue-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <p className="text-xl font-bold">Strategic Partnership</p>
              <p className="text-blue-200">Combining expertise from Flanders' top research institutions.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-blue-300 font-medium">Funded by:</span>
            <div className="px-4 py-2 bg-white/10 rounded-xl flex items-center gap-2">
               <span className="font-bold">fwo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PublicationsSection = () => {
  const pubs = [
    { title: "Scalable Silicon Photonic Neuromorphic Computing", journal: "Nature Electronics", year: "2024" },
    { title: "High-Efficiency III-V-on-Silicon Lasers", journal: "Journal of Lightwave Technology", year: "2023" },
    { title: "Programmable Photonic Mesh for AI Inference", journal: "Optics Express", year: "2023" }
  ];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Publications</h2>
        <div className="space-y-6">
          {pubs.map((pub, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between hover:border-blue-200 transition-colors"
            >
              <div>
                <h4 className="font-bold text-slate-900">{pub.title}</h4>
                <p className="text-sm text-slate-500">{pub.journal} • {pub.year}</p>
              </div>
              <button className="p-2 text-blue-900 hover:bg-blue-50 rounded-lg">
                <ExternalLink size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RepositorySection = () => {
  return (
    <section id="repository" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Layers className="w-10 h-10 text-blue-400" />
          <h2 className="text-4xl font-bold">Document Repository</h2>
        </div>
        <p className="text-slate-400 mb-12 max-w-2xl">
          Access project reports, data sets, and internal documentation for consortium members and researchers.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {['Technical Reports', 'Annual Reviews', 'Software Tools'].map(item => (
            <div key={item} className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <h4 className="text-xl font-bold mb-4">{item}</h4>
              <button className="text-sm font-bold text-blue-400 flex items-center gap-2">
                Browse Files <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-blue-900 font-bold tracking-widest uppercase text-xs">Get Involved</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Partner with the Ghent Photonics Group</h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We collaborate with leading research institutions and global industrial partners to bring photonics from the lab to the real world.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Academic Partnerships', desc: 'Collaborative projects with universities worldwide.', icon: <Globe className="w-6 h-6 text-blue-900" /> },
            { title: 'Industry Transfers', desc: 'Licensing and joint development for commercial products.', icon: <Zap className="w-6 h-6 text-blue-900" /> },
            { title: 'PhD Opportunities', desc: 'Join our team for cutting-edge doctoral research.', icon: <Users className="w-6 h-6 text-blue-900" /> }
          ].map(item => (
            <div key={item.title} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all flex flex-col items-center">
              <div className="mb-4 p-3 bg-blue-100 rounded-xl">
                {item.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-3xl inline-block w-full max-w-4xl">
          <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
          <p className="text-blue-200 mb-8">Reach out to our project office for inquiries regarding research, partnerships, or academic positions.</p>
          <a href="mailto:photonics@ugent.be" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-colors">
            <Mail size={18} /> contact@avalon-sbo.be
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <AvalonLogo className="w-10 h-10" />
              <span className="font-bold text-xl text-blue-900 tracking-tight">AVALON</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Advancing Silicon Photonics through Strategic Basic Research (SBO) at Ghent University.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-900 transition-colors"><Globe size={18} /></a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-blue-900 transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#projects" className="hover:text-blue-900 transition-colors">Projects</a></li>
              <li><a href="#research" className="hover:text-blue-900 transition-colors">Research Areas</a></li>
              <li><a href="#team" className="hover:text-blue-900 transition-colors">Team</a></li>
              <li><a href="https://www.ugent.be/ea/photonics/en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-900 transition-colors">UGent Photonics <ExternalLink size={12} /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">Funding & Partners</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-900/5 rounded p-1">
                  <span className="text-[10px] font-bold text-blue-900">fwo</span>
                </div>
                <span className="text-xs text-slate-500">Research Foundation Flanders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-900/5 rounded p-1 text-center">
                   <span className="text-[8px] font-bold text-blue-900">imec</span>
                </div>
                <span className="text-xs text-slate-500">Industry Partner (imec)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-900/5 rounded p-1 text-center">
                   <span className="text-[8px] font-bold text-blue-900">UGent</span>
                </div>
                <span className="text-xs text-slate-500">Ghent University</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} AVALON Project. Photonics Research Group, Ghent University.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-blue-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Legal Mentions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <ObjectivesSection />
        <ConsortiumSection />
        <PublicationsSection />
        <RepositorySection />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}
