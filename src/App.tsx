import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Cpu, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram,
  Youtube,
  Menu, 
  X, 
  ChevronRight,
  Star,
  Layers,
  Code,
  Smartphone,
  BarChart,
  CheckCircle2,
  Users,
  MessageCircle,
  Send,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// --- Components ---

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        {/* Neon Glow Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border-2 border-transparent border-t-secondary border-r-secondary/30 shadow-[0_0_20px_rgba(242,125,38,0.3)]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 rounded-full border-2 border-transparent border-b-emerald-500 border-l-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        />
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <img 
              src="https://img.sanishtech.com/u/4dc0c38c44821941fb3c38ef4c520e14.jpeg" 
              alt="Logo" 
              className="w-12 h-12 object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-company font-bold text-white tracking-widest">
          GLOW BYTEX <span className="text-secondary">SOLUTION</span>
        </h2>
        <div className="mt-2 flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(242,125,38,0.8)]"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Communities', path: '/communities', dropdown: [
      { name: 'Discord', href: 'https://discord.gg/N4Hw6UBW' },
      { name: 'WhatsApp', href: 'https://chat.whatsapp.com/GQ5tVns2arn5xCsjX7diMb' },
      { name: 'Instagram', href: 'https://www.instagram.com/glow_bytex_solution.in?igsh=bWdqdGM3d2x4c2Q3' },
    ]},
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg border-b border-white/10 ${
      isScrolled || isMobileMenuOpen ? 'py-3 bg-primary/95 shadow-lg' : 'py-5 bg-primary/90 md:bg-primary/40'
    }`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-secondary/30 group-hover:scale-110 transition-transform overflow-hidden">
                <img 
                  src="https://img.sanishtech.com/u/4dc0c38c44821941fb3c38ef4c520e14.jpeg" 
                  alt="Glow Bytex Solution Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          <span className={`text-xl font-company font-bold tracking-tight transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            Glow Bytex <span className="text-secondary">Solution</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="text-sm font-medium text-slate-300 hover:text-secondary transition-colors flex items-center gap-1">
                    {link.name}
                    <ChevronRight size={14} className="rotate-90 group-hover:rotate-180 transition-transform" />
                  </button>
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-primary/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-48 shadow-2xl">
                      {link.dropdown.map((item) => (
                        <a 
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-2 px-3 text-sm text-slate-300 hover:text-secondary hover:bg-white/5 rounded-lg transition-all"
                        >
                          {item.name}
                        </a>
                      ))}
                      <Link 
                        to={link.path}
                        className="block mt-2 pt-2 border-t border-white/10 text-xs font-bold text-secondary hover:text-accent transition-colors"
                      >
                        Explore All
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.path}
                  className="text-sm font-medium text-slate-300 hover:text-secondary transition-colors relative"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              )}
            </div>
          ))}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdc7R11TEY86CannwhOBtLg64_rwO9MPAlIxHD8hKFMoa5bRg/viewform?usp=publish-editor" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-accent text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium text-slate-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdc7R11TEY86CannwhOBtLg64_rwO9MPAlIxHD8hKFMoa5bRg/viewform?usp=publish-editor" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-full text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary/90 text-white pt-24 pb-12 border-t border-white/10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-secondary/30 overflow-hidden">
                <img 
                  src="https://img.sanishtech.com/u/4dc0c38c44821941fb3c38ef4c520e14.jpeg" 
                  alt="Glow Bytex Solution Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <span className="text-lg font-company font-bold tracking-tight">
              Glow Bytex <span className="text-secondary">Solution</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Creating scalable, modern, and user-friendly digital products that help businesses grow. Remote-first technology partner.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Linkedin, url: "https://www.linkedin.com/company/glowsolution/" },
              { Icon: Instagram, url: "https://www.instagram.com/glow_bytex_solution.in?igsh=MTJvbzIzZHcyeDNkdQ==" },
              { Icon: Youtube, url: "https://youtube.com/@glowbytexsolution?si=bFzB42cqz6x9bh8x" }
            ].map(({ Icon, url }, i) => (
              <a 
                key={i} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-orange-500">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/products" className="hover:text-secondary transition-colors">Products</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/services" className="hover:text-secondary transition-colors">Web <span className="text-[0.98em] md:text-[1em]">Development</span></Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Mobile Apps</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">AI Solutions</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Cloud Infrastructure</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-green-500">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-3"><Mail size={16} className="text-secondary" /> glowbytexsolution@gmail.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-secondary" /> +91 7810051411</li>
            <li className="flex items-center gap-3"><Globe size={16} className="text-secondary" /> Namakkal, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="container-custom pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <img 
            src="https://img.sanishtech.com/u/849cfc40fbb92c8ac734caa074d16a1a.jpeg" 
            alt="Bharanidharan P" 
            className="w-6 h-6 rounded-full border border-white/40"
            referrerPolicy="no-referrer"
          />
          <span>© {new Date().getFullYear()} <span className="font-company font-bold">Glow Bytex Solution</span>. All rights reserved.</span>
        </div>
        <span className="hidden md:block text-white/10">|</span>
        <span>Founded by Bharanidharan P.</span>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoSubject = subject ? subject.toString() : `New Message from ${fullName}`;
    const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:telite87@gmail.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
          <motion.img 
            initial={{ rotateX: 10, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.5 }}
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYSVJlitOx4UW8hLqRaO2ZcYITv9GKcT3TihCJyz6n2UEZyJg-ha4z4mv7zCIRbAvONC-BGSU0Img-svRQuXeUhpglWOpVsuVaxmW07pfuv1FxrvPndMi0puG8AITmJ5qVRiFc_MMD7wFcPt322Bi_BtrN600_o19ooMmqB_oHiph15lRXJnYX-frRaT3X/s1600/32999190_963702524165.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="image-fade-overlay" />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-8">
              <div className="w-4 h-4 rounded-sm overflow-hidden bg-white">
                <img 
                  src="https://img.sanishtech.com/u/4dc0c38c44821941fb3c38ef4c520e14.jpeg" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              Future-Ready Solutions
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Building <span className="text-gradient">Smart</span> Digital Solutions for <span className="text-yellow-400">the Future.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-400 mb-12 max-w-xl leading-relaxed">
              <span className="font-company font-bold text-white">Glow Bytex Solution</span> creates scalable, modern, and user-friendly digital products that help businesses grow. We specialize in web, software, and AI-enabled solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/services" className="bg-primary hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 group">
                Explore Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products" className="bg-white hover:bg-slate-50 text-primary border border-slate-200 px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1">
                View Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass rounded-[2.5rem] p-4 border-white/40 shadow-2xl animate-float overflow-hidden">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-white relative group pt-[90px]">
                <img 
                  src="https://img.sanishtech.com/u/e44dab50af78ac74409f36120b31bdea.jpeg" 
                  alt="Glow Bytex Solution Visual" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <section className="relative py-24 overflow-hidden bg-[#0a1c37] backdrop-blur-lg border-y border-white/10 shadow-2xl">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#7B61FF]/5 rounded-full blur-[120px] -translate-y-1/2" />
        </div>

        <div className="w-full relative z-10 overflow-hidden">
          <div className="flex w-full overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="flex flex-nowrap items-center gap-6 md:gap-12 px-6 md:px-12 w-max"
            >
              {[
                { num: "5+", label: "Years of Experience" },
                { num: "50+", label: "Successful Projects" },
                { num: "25+", label: "Happy Clients" },
                { num: "2K+", label: "5 Star Rating Reviews", icon: <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 inline-block mr-1 mb-0.5" fill="currentColor" /> },
                // Duplicate for seamless infinite auto-scroll
                { num: "5+", label: "Years of Experience" },
                { num: "50+", label: "Successful Projects" },
                { num: "25+", label: "Happy Clients" },
                { num: "2K+", label: "5 Star Rating Reviews", icon: <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 inline-block mr-1 mb-0.5" fill="currentColor" /> }
              ].map((stat, i) => (
                <div key={i} className="shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="relative group w-44 h-44 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center cursor-default"
                  >
                    {/* Glass Card */}
                    <div className="absolute inset-[1px] rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden">
                      {/* Subtle gradient shine moving across cards */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-all" />
                      
                      <div className="relative z-10 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-[#00E5FF] to-[#7B61FF] mb-2 tracking-tight">
                        {stat.num}
                      </div>
                      <div className="relative z-10 text-[12px] md:text-[14px] text-white/80 font-medium text-center px-6 leading-snug">
                        {stat.icon}{stat.label}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-padding relative overflow-hidden perspective-1000"
      >
        <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2 }}
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlpsb5duBxzi5_d3y4u9RAJyt3KRBbJ4pxPUA73lVScxDp2QOEamuYx45mhrNI65feIsgWQ6AYs8-Z6WxSHhyphenhyphen3JUMwddyig7H0sHH3_VZ73iSZzMBqBEHCSe5dCiSW42hdcezrVPOuGPXSqc084N0gphUZoLnoVFDlWZaIIm1WtlVoTTT7-Wg72psBBCWB/s1600/419638525_95cfd757-c289-420a-9868-7cf82f45ee92.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="image-fade-overlay" />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-md" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Redefining Digital <span className="text-secondary">Excellence</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Founded in 2024 by <span className="text-emerald-500 text-sm font-bold">Bharanidharan P</span>, <span className="font-company font-bold text-white">Glow Bytex Solution</span> was born out of a passion for creating high-impact digital products. We operate as a remote-first organization, bringing together top talent to solve complex digital challenges for businesses worldwide.
              </p>
              <div className="space-y-4">
                {[
                  'Scalable Architecture Design',
                  <>{'User-Centric Product '}<span className="text-[0.98em] md:text-[1em]">Development</span></>,
                  'Modern Web & Mobile Technologies',
                  'AI-Enabled Business Solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary" size={20} />
                    <span className="font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative perspective-1000"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhQHbjkOH7pyL609XumM6KHUhWLZIOKysnDpCJY75OTbJhLncfNBEm9VOgUQASmnmpWrSZl-6puiZEBq5wo1Lfp4G88d29Wmnh6NZ9WMLuZjUP3UKNrTZ63HW9rqAdfCb5fPDO4OCnveSTOm-ihf41kaV2vY4PBGPB5zKYe_XveUeu5KpvUv5fwc6-ky1p/s1600/WhatsApp%20Image%202026-03-28%20at%2011.04.55%20AM%20(1).jpeg" 
                  alt="Bharanidharan P - Founder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 bg-white p-5 md:p-8 rounded-2xl shadow-2xl z-10">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">Projects Delivered</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-padding relative overflow-hidden perspective-1000"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2 }}
            src="https://img.sanishtech.com/u/514a16a97d163109e7a1c8f486ac61cf.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="image-fade-overlay" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20 px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">Our Core <span className="text-secondary">Expertise</span></h2>
            <p className="text-slate-400 text-lg md:text-xl">We provide end-to-end technology solutions tailored to your business needs, focusing on quality, performance, and scalability.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Code, 
                title: <>{'Web '}<span className="text-[0.98em] md:text-[1em]">Development</span></>, 
                desc: 'Custom web applications built with modern frameworks for maximum performance and scalability.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
              },
              { 
                icon: Smartphone, 
                title: 'App Development', 
                desc: 'Native and cross-platform mobile apps that provide seamless user experiences across all devices.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
              },
              { 
                icon: Cpu, 
                title: 'AI Integration', 
                desc: 'Leveraging artificial intelligence to automate workflows and provide intelligent insights for your business.',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
              },
              { 
                icon: Layers, 
                title: 'UI/UX Design', 
                desc: 'User-centric design approach focused on creating intuitive and visually stunning digital interfaces.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 15, rotateY: -5 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className="relative p-6 md:p-10 rounded-2xl md:rounded-3xl border-[3px] border-white/40 hover-lift group overflow-hidden max-w-md mx-auto md:max-w-none w-full min-h-[320px] flex flex-col justify-center shadow-2xl shadow-black/50 perspective-1000"
              >
                {/* Background Image - No Blur */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt="" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="card-image-overlay" />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors duration-500" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-500 mx-auto">
                    <service.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-secondary/20 text-secondary text-[8px] md:text-[10px] font-bold uppercase tracking-wider mb-3 md:mb-4">
                    <CheckCircle2 size={10} className="md:w-3 md:h-3" />
                    100% Performance
                  </div>
                  <h3 className="text-lg md:text-3xl font-bold mb-3 md:mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-100 text-xs md:text-lg mb-6 md:mb-8 leading-relaxed font-medium line-clamp-3 md:line-clamp-none">{service.desc}</p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdc7R11TEY86CannwhOBtLg64_rwO9MPAlIxHD8hKFMoa5bRg/viewform?usp=publish-editor" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary hover:bg-white text-primary px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-sm md:text-base font-bold transition-all hover:-translate-y-1 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group/btn"
                  >
                    Get Started <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-padding relative overflow-hidden perspective-1000"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2 }}
            src="https://img.sanishtech.com/u/5e7cc9e699d2c97475a9dfb742e3bb56.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Premium <span className="text-secondary">Products</span></h2>
            <p className="text-slate-400 text-lg">Discover our suite of innovative products designed to streamline your business operations and enhance productivity.</p>
          </div>

          <div className="space-y-24">
            {[
              { 
                title: 'GlowCRM', 
                tag: 'SaaS Tool', 
                desc: 'A futuristic CRM system designed for remote teams to manage clients and workflows seamlessly. Built with AI-driven insights to help you close deals faster.',
                features: ['Real-time Collaboration', 'AI Insights', 'Automated Reporting'],
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
                reverse: false
              },
              { 
                title: 'Bytex Analytics', 
                tag: 'Data Platform', 
                desc: 'Powerful data visualization and analytics platform that turns complex data into actionable business intelligence in seconds.',
                features: ['Custom Dashboards', 'Predictive Modeling', 'Data Connectors'],
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
                reverse: true
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${product.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">{product.tag}</div>
                  <h3 className="text-4xl font-bold mb-6 text-white">{product.title}</h3>
                  <p className="text-lg text-slate-400 mb-8 leading-relaxed">{product.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-slate-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/products" className="inline-flex items-center gap-2 text-secondary font-bold border-b-2 border-secondary pb-1 hover:text-white hover:border-white transition-all">
                    Explore Product <ArrowRight size={18} />
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative group border-[3px] border-white/40">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-padding bg-primary text-white overflow-hidden relative perspective-1000"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2 }}
            src="https://img.sanishtech.com/u/51017574b8ea015c6806f284ab8569bb.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Technology <span className="text-secondary">Stack</span></h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                We stay at the forefront of innovation by utilizing the most powerful and reliable technologies in the industry.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  'React / Next.js', 'Node.js', 'TypeScript',
                  'Python / AI', 'AWS / Cloud', 'PostgreSQL',
                  'Docker', 'GraphQL', 'Tailwind CSS'
                ].map((tech, i) => (
                  <div key={i} className="border-[3px] border-white/40 p-4 rounded-xl text-center font-medium hover:bg-white/10 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Performance', val: '99%' },
                { label: 'Security', val: '100%' },
                { label: 'Uptime', val: '99.9%' },
                { label: 'Satisfaction', val: '100%' }
              ].map((stat, i) => (
                <div key={i} className="border-[3px] border-white/40 p-8 rounded-3xl text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.val}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.sanishtech.com/u/a64a3cd3e794220fb4ac96dbdcba971d.jpeg" 
            alt="Client Success Background" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="image-fade-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/40 to-primary" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client <span className="text-secondary">Success</span></h2>
            <p className="text-slate-400 text-lg">Hear from the businesses we've helped transform through technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: <><span className="font-company font-bold">Glow Bytex Solution</span> transformed our vision into a stunning reality. Their attention to detail is unmatched.</> },
              { name: 'Michael Chen', role: 'CTO, InnovateX', text: 'The most professional development team we have ever worked with. They delivered ahead of schedule and exceeded all expectations.' },
              { name: 'Elena Rodriguez', role: 'Founder, EcoSphere', text: 'Their AI solutions helped us automate 40% of our manual processes. A true game-changer for our remote team.' }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 rounded-3xl shadow-xl border-[3px] border-white/40"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Communities CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding relative overflow-hidden perspective-1000 bg-[#0a1e38]"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.2 }}
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6VBqFpjgUKiM74DBzZiTwYlmDyl2UAnecUJy6dmIQbzGnZbnEPZZHqN2MJaw5X_x89HKUE119JQ3-9oN2n1fP7tXTueQXtG5n-ldnuymt-8yX144EKxTI9HogoS34kNnJ5S1yxxthjK-d00leFjUGqwQ0wvefvuEEx6_SIUxWfg3XjVwdk1IpGjaK-TMJ/s1600/WhatsApp%20Image%202026-03-31%20at%201.29.42%20PM%20(1).jpeg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#0a1e38]/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="glass-dark rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 border-[3px] border-white/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">Join Our <span className="text-secondary">Communities</span></h2>
              <p className="text-slate-300 text-base md:text-lg mb-4">
                Stay connected with us and be part of our growing network.
              </p>
              <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed">
                We share all hiring updates, internships, freelance opportunities, and announcements through our official communities. Join your preferred platform and never miss any update.
              </p>
              <Link 
                to="/communities"
                className="inline-flex items-center gap-3 bg-secondary hover:bg-accent text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold transition-all shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1"
              >
                Explore Communities
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section-padding relative overflow-hidden perspective-1000" id="contact"
      >
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
            whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2 }}
            src="https://img.sanishtech.com/u/4ea92cf418251e9c7ac4620074fd5910.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-custom relative z-10">
          <div className="glass-dark rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Build the <span className="text-secondary">Future</span> Together.</h2>
                <p className="text-slate-400 text-lg mb-12">
                  Ready to start your next digital project? Contact us today for a free consultation and let's discuss how we can help your business grow.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-secondary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email Us</div>
                      <div className="font-medium">telite87@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-secondary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Call Us</div>
                      <div className="font-medium">+91 7810051411</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-3xl p-8 md:p-10 shadow-2xl border-[3px] border-white/40">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Full Name</label>
                      <input name="fullName" type="text" required className="w-full px-4 py-3 rounded-xl border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white">Email Address</label>
                      <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Subject</label>
                    <input name="subject" type="text" required className="w-full px-4 py-3 rounded-xl border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all" placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Message</label>
                    <textarea name="message" required className="w-full px-4 py-3 rounded-xl border border-white/40 text-white focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all h-32" placeholder="Tell us about your project..." />
                  </div>
                  <button 
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg ${
                      isSubmitted 
                        ? 'bg-green-500 text-white shadow-green-500/20' 
                        : 'bg-secondary hover:bg-accent text-white shadow-secondary/20'
                    }`}
                  >
                    {isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-[600px] perspective-1000">
        <motion.img 
          initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
          whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
          transition={{ duration: 1.2 }}
          src="https://img.sanishtech.com/u/33a5da3f6f0120a472b66047c93c2f1e.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="image-fade-overlay" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Our <span className="text-gradient">Story</span></h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            <span className="font-company font-bold text-white">Glow Bytex Solution</span> is a modern technology company founded in 2024 by <span className="text-emerald-500 text-sm font-bold">Bharanidharan P</span>. We operate as a remote-first organization, bringing together top talent to solve complex digital challenges for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border-[3px] border-white/40 p-12 rounded-[2.5rem] perspective-1000"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.sanishtech.com/u/94a492189edb36412d4625113dfe09d4.jpeg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="card-image-overlay" />
              <div className="absolute inset-0 bg-primary/40" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To empower businesses by building high-quality, scalable, and user-centric digital products that drive growth and innovation in an ever-evolving technological landscape.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden border-[3px] border-white/40 p-12 rounded-[2.5rem] text-white perspective-1000"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.sanishtech.com/u/0491c541cc21b9290d405fddaf7fa133.jpeg" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="card-image-overlay" />
              <div className="absolute inset-0 bg-primary/40" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-secondary">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the global leader in remote-first technology partnerships, recognized for our commitment to excellence, integrity, and the creation of transformative digital experiences.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32 perspective-1000"
        >
          <div className="glass-dark rounded-[3rem] p-12 md:p-20 overflow-hidden relative border-[3px] border-white/40">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.sanishtech.com/u/e35edaa79a2c880ca04363a3a455b9ad.jpeg" 
                alt="" 
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="image-fade-overlay" />
              <div className="absolute inset-0 bg-primary/60" />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the <span className="text-secondary">Founder</span></h2>
                <h3 className="text-2xl font-bold text-white mb-4"><span className="text-emerald-500 text-sm">Bharanidharan P</span></h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  As the visionary behind <span className="font-company font-bold text-white">Glow Bytex Solution</span>, <span className="text-emerald-500 text-sm font-bold">Bharanidharan P</span> brings a wealth of expertise in modern technology and product design. His passion for creating scalable digital solutions has led to the successful delivery of numerous high-impact projects.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/bharani-dharan-b1911023a" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/bharani874?igsh=cWNwMXFuZnlmeHZn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="https://youtube.com/@gamingwithttspeed6042?si=t6T-3o9hpWWHeD_p" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
                    <Youtube size={20} />
                  </a>
                  <a href="https://bharaniportfolio3.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <motion.div 
                  initial={{ rotateY: 20, scale: 0.9 }}
                  whileInView={{ rotateY: 0, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 perspective-1000"
                >
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative w-full h-full rounded-full border-4 border-secondary/30 p-2">
                    <img 
                      src="https://img.sanishtech.com/u/849cfc40fbb92c8ac734caa074d16a1a.jpeg" 
                      alt="Bharanidharan P" 
                      className="w-full h-full object-cover rounded-full shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.section 
          initial={{ opacity: 0, y: 40, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="section-padding text-center mb-20 relative overflow-hidden rounded-[3rem] border-[3px] border-white/40 perspective-1000"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://img.sanishtech.com/u/e35edaa79a2c880ca04363a3a455b9ad.jpeg" 
              alt="" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="image-fade-overlay" />
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-white">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quality', desc: 'We never compromise on the quality of our code or design.' },
                { title: 'Integrity', desc: 'Honesty and transparency are at the heart of every partnership.' },
                { title: 'Innovation', desc: 'We constantly explore new technologies to stay ahead.' },
                { title: 'Remote-First', desc: 'We embrace the future of work to access global talent.' }
              ].map((value, i) => (
                <div key={i} className="p-8 transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/40">
                  <h4 className="text-xl font-bold mb-4 text-white">{value.title}</h4>
                  <p className="text-sm text-slate-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    { 
      title: <>{'Web '}<span className="text-[0.98em] md:text-[1em]">Development</span></>, 
      icon: Code,
      desc: 'We build high-performance web applications using the latest technologies like React, Next.js, and Node.js. Our focus is on speed, SEO, and scalability.',
      features: ['Single Page Applications', 'E-commerce Solutions', <>{'Custom CMS '}<span className="text-[0.98em] md:text-[1em]">Development</span></>, 'Progressive Web Apps'],
      bgImage: 'https://picsum.photos/seed/3d-abstract-web/800/600'
    },
    { 
      title: <>{'Mobile App '}<span className="text-[0.98em] md:text-[1em]">Development</span></>, 
      icon: Smartphone,
      desc: 'Creating seamless mobile experiences for iOS and Android. We specialize in Flutter and React Native for efficient, high-quality cross-platform apps.',
      features: ['Native iOS & Android', 'Cross-Platform Apps', 'Mobile UI/UX Design', 'App Store Optimization'],
      bgImage: 'https://picsum.photos/seed/3d-abstract-mobile/800/600'
    },
    { 
      title: 'AI & Machine Learning', 
      icon: Cpu,
      desc: 'Integrating intelligent features into your products. From chatbots to predictive analytics, we help you leverage the power of AI.',
      features: ['Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'AI-Driven Automation'],
      bgImage: 'https://picsum.photos/seed/3d-abstract-ai/800/600'
    },
    { 
      title: 'UI/UX Design', 
      icon: Layers,
      desc: 'User-centric design that converts. We create intuitive interfaces and engaging user journeys that keep your customers coming back.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Interaction Design'],
      bgImage: 'https://picsum.photos/seed/3d-abstract-design/800/600'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-0 perspective-1000">
        <motion.img 
          initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
          whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
          transition={{ duration: 1.2 }}
          src="https://img.sanishtech.com/u/a013ca88639298bf417e190129d6b9b9.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="image-fade-overlay" />
        <div className="absolute inset-0 bg-primary/75" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Our <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-slate-400">Comprehensive technology solutions designed to scale your business.</p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 15, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="relative border-[3px] border-white/40 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 flex flex-col lg:flex-row gap-8 md:gap-16 overflow-hidden min-h-[400px] perspective-1000"
            >
              {/* Card Background Image - No Blur */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover object-center opacity-60"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="card-image-overlay" />
                <div className="absolute inset-0 bg-primary/70" />
              </div>

              <div className="relative z-10 lg:w-1/3">
                <div className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-white/40 rounded-2xl md:rounded-3xl flex items-center justify-center text-secondary shadow-xl mb-6 md:mb-8">
                  <service.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{service.title}</h2>
                <p className="text-sm md:text-base text-slate-100 leading-relaxed mb-8 font-medium">{service.desc}</p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdc7R11TEY86CannwhOBtLg64_rwO9MPAlIxHD8hKFMoa5bRg/viewform?usp=publish-editor" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-white text-primary px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-1 shadow-lg shadow-secondary/20 group"
                >
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="relative z-10 lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {service.features.map((feature, j) => (
                  <div key={j} className="bg-primary/40 border-[3px] border-white/40 p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm flex items-center gap-3 md:gap-4 backdrop-blur-none">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary/10 flex shrink-0 items-center justify-center text-secondary">
                      <CheckCircle2 size={16} className="md:w-5 md:h-5" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 perspective-1000">
        <motion.img 
          initial={{ rotateX: 15, scale: 1.1, opacity: 0 }}
          whileInView={{ rotateX: 0, scale: 1, opacity: 0.9 }}
          transition={{ duration: 1.2 }}
          src="https://img.sanishtech.com/u/5e7cc9e699d2c97475a9dfb742e3bb56.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Our <span className="text-gradient">Products</span></h1>
          <p className="text-xl text-slate-400">Innovative digital products built for the modern enterprise.</p>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {[
            {
              name: 'GlowCRM',
              tagline: 'The Future of Customer Management',
              desc: 'GlowCRM is a next-generation customer relationship management system designed specifically for remote-first companies. It combines powerful automation with intuitive design to help teams stay connected and productive.',
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
              features: ['AI Lead Scoring', 'Automated Workflows', 'Omnichannel Communication', 'Advanced Analytics']
            },
            {
              name: 'Bytex Analytics',
              tagline: 'Data Intelligence Simplified',
              desc: 'Bytex Analytics turns your raw data into actionable insights. With our real-time processing engine and beautiful visualizations, you can make informed decisions in seconds, not hours.',
              image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
              features: ['Real-time Monitoring', 'Custom Report Builder', 'Predictive Modeling', 'Secure Data Integration']
            }
          ].map((product, i) => (
            <div key={i} className="group">
              <motion.div 
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-[3rem] overflow-hidden border-[3px] border-white/40 mb-12 shadow-2xl aspect-video relative perspective-1000"
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
                <div className="card-image-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-12 md:p-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 break-words">{product.name}</h2>
                    <p className="text-xl text-secondary font-medium">{product.tagline}</p>
                  </motion.div>
                </div>
              </motion.div>
              <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">{product.desc}</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoKLBtJ4cBcSr_tnyZ_nFDnUcFIAK8WwTqA0xeSJXlrHcdgw/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary hover:bg-accent text-white px-10 py-4 rounded-full font-bold transition-all">
                    Request Demo
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="font-bold text-white">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = `New Message from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:glowbytexsolution@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-slate-400">Have a project in mind? Let's discuss how we can bring it to life.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative border-[3px] border-white/40 p-10 rounded-3xl overflow-hidden group perspective-1000"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://img.sanishtech.com/u/f61938d03c888122d27647aaef39edb1.jpeg" 
                  alt="" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="card-image-overlay" />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 border-[3px] border-white/40 rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-400 mb-4">Our team is here to help.</p>
                <a href="mailto:glowbytexsolution@gmail.com" className="text-secondary font-bold hover:text-white transition-colors">glowbytexsolution@gmail.com</a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative border-[3px] border-white/40 p-10 rounded-3xl overflow-hidden group perspective-1000"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://img.sanishtech.com/u/3fc03539383b3ec4de480719b91b2be8.jpeg" 
                  alt="" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="card-image-overlay" />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 border-[3px] border-white/40 rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-slate-400 mb-4">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+917810051411" className="text-secondary font-bold hover:text-white transition-colors">+91 7810051411</a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative border-[3px] border-white/40 p-10 rounded-3xl overflow-hidden group perspective-1000"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://img.sanishtech.com/u/b0056ebe3b391cc04eea48e0f707549c.jpeg" 
                  alt="" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="card-image-overlay" />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-500" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 border-[3px] border-white/40 rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-slate-400 mb-4">Namakkal, Tamil Nadu, India</p>
                <span className="text-secondary font-bold">Headquarters</span>
              </div>
            </motion.div>

            <div className="relative border-[3px] border-white/40 p-10 rounded-3xl overflow-hidden group">
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://img.sanishtech.com/u/7e7104ae765e696f0743cd57b7695b93.jpeg" 
                  alt="" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-500" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { Icon: Linkedin, url: "https://www.linkedin.com/company/glowsolution/" },
                    { Icon: Instagram, url: "https://www.instagram.com/glow_bytex_solution.in?igsh=MTJvbzIzZHcyeDNkdQ==" },
                    { Icon: Youtube, url: "https://youtube.com/@glowbytexsolution?si=bFzB42cqz6x9bh8x" }
                  ].map(({ Icon, url }, i) => (
                    <a 
                      key={i} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-2xl border-[3px] border-white/40 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative border-[3px] border-white/40 rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden group">
            {/* Card Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://img.sanishtech.com/u/a013ca88639298bf417e190129d6b9b9.jpeg" 
                alt="" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-500" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white uppercase tracking-widest">First Name</label>
                  <input name="firstName" type="text" required className="w-full px-6 py-4 rounded-2xl border border-white/40 text-white focus:outline-none focus:ring-4 focus:ring-secondary/10 transition-all" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white uppercase tracking-widest">Last Name</label>
                  <input name="lastName" type="text" required className="w-full px-6 py-4 rounded-2xl border border-white/40 text-white focus:outline-none focus:ring-4 focus:ring-secondary/10 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white uppercase tracking-widest">Email Address</label>
                <input name="email" type="email" required className="w-full px-6 py-4 rounded-2xl border border-white/40 text-white focus:outline-none focus:ring-4 focus:ring-secondary/10 transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-white uppercase tracking-widest">Project Details</label>
                <textarea name="message" required className="w-full px-6 py-4 rounded-2xl border border-white/40 text-white focus:outline-none focus:ring-4 focus:ring-secondary/10 transition-all h-40" placeholder="Tell us about your project goals..." />
              </div>
              <button 
                type="submit"
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all shadow-xl ${
                  isSubmitted 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : 'bg-secondary hover:bg-accent text-white shadow-secondary/20'
                }`}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- App Component ---

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const CommunitiesPage = () => {
  const communities = [
    {
      name: 'Discord Community',
      desc: 'Join our main hub for hiring updates, internships, freelance projects, and direct interaction with our team.',
      link: 'https://discord.gg/N4Hw6UBW',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-[#5865F2]',
      cardBg: 'bg-[#5865F2]/10 hover:bg-[#5865F2]/20',
      borderColor: 'hover:border-[#5865F2]/50'
    },
    {
      name: 'WhatsApp Community',
      desc: 'Receive quick updates, announcements, and important notifications directly on your phone.',
      link: 'https://chat.whatsapp.com/GQ5tVns2arn5xCsjX7diMb',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'bg-[#25D366]',
      cardBg: 'bg-[#25D366]/10 hover:bg-[#25D366]/20',
      borderColor: 'hover:border-[#25D366]/50'
    },
    {
      name: 'Instagram Community',
      desc: 'Follow us for updates, insights, and creative content about our work and opportunities.',
      link: 'https://www.instagram.com/glow_bytex_solution.in?igsh=bWdqdGM3d2x4c2Q3',
      icon: <Instagram className="w-8 h-8" />,
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      cardBg: 'bg-[#ee2a7b]/10 hover:bg-[#ee2a7b]/20',
      borderColor: 'hover:border-[#ee2a7b]/50'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl font-bold text-white mb-8"
          >
            Join Our <span className="text-secondary">Communities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            We believe in building a strong and active community. All our updates, opportunities, and interactions happen through the platforms below. Choose your preferred platform and stay connected with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {communities.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className={`rounded-[2.5rem] p-10 border-[3px] border-white/10 transition-all duration-300 group backdrop-blur-xl ${item.cardBg} ${item.borderColor}`}
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.name}</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {item.desc}
              </p>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary font-bold hover:text-accent transition-colors"
              >
                Join Now <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto bg-red-500/10 border border-red-500/20 rounded-3xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-red-500 mb-4 font-bold uppercase tracking-widest text-sm">
            <Shield size={20} />
            Important Note
          </div>
          <p className="text-slate-300">
            We do not post hiring updates directly on our website. All opportunities are shared exclusively through our communities.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to Glow Bytex Solution! How can I help you?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { text: inputValue, sender: 'user', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Bot response logic
    setTimeout(() => {
      const lowerInput = userMsg.text.toLowerCase();
      let botResponse = "Sorry, I couldn't find that information. Please contact support.";

      if (lowerInput.includes('service') || lowerInput.includes('offer') || lowerInput.includes('do you do')) {
        botResponse = "We specialize in web, software, and AI-enabled solutions. Check out our Services page for more details.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing')) {
        botResponse = "Sorry, I couldn't find that information. Please contact support.";
      } else if (lowerInput.includes('contact') || lowerInput.includes('support') || lowerInput.includes('email') || lowerInput.includes('phone')) {
        botResponse = "You can reach us at telite87@gmail.com or call us at +91 7810051411. Or visit our Contact page.";
      } else if (lowerInput.includes('product')) {
        botResponse = "We offer innovative digital products like GlowCRM and Bytex Analytics. Visit our Products page to learn more.";
      } else if (lowerInput.includes('about') || lowerInput.includes('who are you')) {
        botResponse = "Glow Bytex Solution creates scalable, modern, and user-friendly digital products that help businesses grow.";
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        botResponse = "Hello! How can I assist you today?";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originX: 1, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 250, damping: 20 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
            style={{ height: '500px', maxHeight: 'calc(100vh - 8rem)' }}
          >
            {/* Header */}
            <div className="bg-primary/95 p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-white/20 text-white">
                    <Bot size={20} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">Glow Bytex Solution</h3>
                  <p className="text-green-400 text-xs flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-slate-50/50 p-4 overflow-y-auto flex flex-col gap-4 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
                >
                  <div className={`px-4 py-2.5 rounded-2xl ${msg.sender === 'user' ? 'bg-secondary text-white rounded-br-sm shadow-md shadow-secondary/20' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-sm shadow-sm'}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 px-1 font-medium">{msg.time}</span>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-slate-100 text-slate-800 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium placeholder:text-slate-400"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-11 h-11 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/40 hover:-translate-y-0.5"
              >
                <Send size={18} className="ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-xl shadow-secondary/30 text-white relative z-50 overflow-hidden border-2 border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-primary"
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Bot size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-transparent">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
              <Route path="/communities" element={<PageWrapper><CommunitiesPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
