/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, 
  Database, 
  Palette, 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Instagram, 
  ArrowRight,
  Menu,
  X,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

const REGISTRATION_LINK = "https://forms.gle/WrzEBja2MWigLZk46";
const LOGO_URL = "https://i.ibb.co/93HxXqfZ/IMG-5622.jpg";
const CLASSROOM_IMAGE = "https://i.ibb.co/zWs3bTBp/IMG-3716-2.avif";
const INSTAGRAM_URL = "https://www.instagram.com/coriftech?igsh=eG1rdXVoZ2pzdGlm&utm_source=qr";

const programs = [
  {
    title: "Data Analytics",
    description: "Master the art of data visualization and insight generation using modern tools.",
    icon: Database,
    color: "bg-blue-500"
  },
  {
    title: "Web Development",
    description: "Build modern, responsive websites using the latest front and back-end technologies.",
    icon: Laptop,
    color: "bg-indigo-500"
  },
  {
    title: "Graphics Design",
    description: "Bring your visual ideas to life with professional design techniques and tools.",
    icon: Palette,
    color: "bg-blue-600"
  },
  {
    title: "Content Creation",
    description: "Learn to create engaging digital content for brands and social platforms.",
    icon: Video,
    color: "bg-sky-500"
  },
  {
    title: "Career Development",
    description: "Get the mentorship and soft skills needed to thrive in the global tech workplace.",
    icon: TrendingUp,
    color: "bg-blue-400"
  }
];

const testimonials = [
  {
    name: "Tunde Abraham",
    role: "UI/UX Student",
    quote: "Coriftech changed my perspective on tech. The instructors are so patient and the community is amazing!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde"
  },
  {
    name: "Chidimma Okafor",
    role: "Web Dev Graduate",
    quote: "I landed my first internship just three months after finishing the Bootcamp. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chidimma"
  },
  {
    name: "Efe Johnson",
    role: "Graphics Design Student",
    quote: "The hands-on projects helped me build a professional portfolio from scratch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Efe"
  }
];

const features = [
  { text: "Beginner-friendly learning", icon: CheckCircle2 },
  { text: "Practical training", icon: CheckCircle2 },
  { text: "Mentorship", icon: CheckCircle2 },
  { text: "Community support", icon: CheckCircle2 },
  { text: "Real-world projects", icon: CheckCircle2 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt="Coriftech Logo" 
              className="h-[50px] w-auto rounded-lg shadow-sm"
              style={{ height: '50px' }}
            />
          </div>

          <div className="hidden md:flex items-center gap-10 font-medium">
            <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
            <a href="#programs" className="hover:text-primary-600 transition-colors">Programs</a>
            <a href="#projects" className="hover:text-primary-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
            <a 
              href={REGISTRATION_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
            >
              Register Now
            </a>
          </div>

          <button className="md:hidden text-primary-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-primary-50 px-6 py-6"
            >
              <div className="flex flex-col gap-4 font-medium">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#programs" onClick={() => setIsMenuOpen(false)}>Programs</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a 
                  href={REGISTRATION_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-primary-600 text-white px-6 py-3 rounded-xl text-center"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary-50/50 rounded-l-[100px] hidden lg:block" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide">
              TECH EMPOWERMENT FOR GEN Z
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8 text-slate-900">
              Learn Practical <span className="text-primary-600">Digital Skills</span> & Build Your Future
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Join a beginner-friendly tech learning community designed to help you become confident, employable, and ready for real opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                id="cta-register"
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition-all hover:scale-105 shadow-xl shadow-primary-200"
              >
                Register Now <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#programs"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 border-2 border-primary-100 hover:border-primary-600 transition-all"
              >
                Explore Courses
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="text-slate-900 font-bold">500+</span> Students Joined
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students learning tech" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            {/* Floating floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">Success Rate</p>
                  <p className="text-sm font-bold">95% Growth</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-4xl font-bold mb-6">About Coriftech Solutions</h2>
              <div className="w-20 h-1.5 bg-primary-600 rounded-full mb-8" />
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Coriftech Solutions is a tech learning brand focused on practical digital skills and career growth. We bridge the gap between academic knowledge and industrial requirements.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We believe that everyone deserves a chance to thrive in the digital economy. That's why we've built a community that supports beginners through every step of their journey—from writing their first line of code to landing their dream job.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students in class" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-full flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary-600 hover:scale-110 transition-transform shadow-2xl">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Tech Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specially curated courses designed to take you from zero to expert. Choose a path that fits your aspiration.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary-600 hover:shadow-2xl hover:shadow-primary-100 transition-all"
              >
                <div className={`w-14 h-14 ${program.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                <a 
                  href={REGISTRATION_LINK}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary-600 font-bold group-hover:gap-3 transition-all"
                >
                  Apply to Program <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Experience / Classroom Section */}
      <section id="projects" className="py-24 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle tech grid background */}
          <div className="grid grid-cols-12 h-full w-full border-white/20">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                More Than Just a Classroom. It's an <span className="text-primary-400">Experience.</span>
              </h2>
              <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                We focus on teamwork, peer learning, and real-world project execution. Our classroom sessions are interactive, fun, and designed for students to grow together.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Community Driven</h4>
                    <p className="text-primary-200">Connect with like-minded Gen Z individuals through regular meetups and online channels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center shrink-0">
                    <Laptop className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Hands-on Lab</h4>
                    <p className="text-primary-200">Work directly on live projects that you can feature on your professional portfolio.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-8 ring-primary-800/50">
                <img 
                  src={CLASSROOM_IMAGE} 
                  alt="Classroom experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl">
                <p className="text-3xl font-bold text-primary-600">Asaba, NG</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Our Physical Hub</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Roadmap Section */}
      <section id="roadmap" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Your Path to Success</h2>
            <div className="w-24 h-1.5 bg-primary-600 rounded-full mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              We've designed a clear, step-by-step roadmap to help you go from a complete beginner to a confident tech professional.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Enroll", desc: "Register for your preferred tech track and join the community." },
              { step: "02", title: "Training", desc: "Learn from industry experts in hands-on, practical sessions." },
              { step: "03", title: "Projects", desc: "Apply your skills to real-world tasks and build a portfolio." },
              { step: "04", title: "Mentorship", desc: "Get personalized guidance from experts who have been there." },
              { step: "05", title: "Launch", desc: "Graduate with confidence and start your professional journey." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="relative text-center"
              >
                {idx < 4 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-100 -z-10" />
                )}
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-xl">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-slate-600">Hear from those who have walked the path before you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-4xl font-serif">
                  "
                </div>
                <p className="text-lg text-slate-700 mb-8 italic leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-primary-50" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary-600 rounded-[40px] p-8 md:p-16 text-white grid lg:grid-cols-2 gap-16 items-center shadow-2xl shadow-primary-200">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to start your tech journey?</h2>
              <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                Send us a message, give us a call, or visit our physical office. We are always ready to answer your questions and guide you on the best program for your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-100 font-bold uppercase tracking-wider">Call or WhatsApp</p>
                    <p className="text-xl font-bold">+234 707 386 0214</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-100 font-bold uppercase tracking-wider">Our Address</p>
                    <p className="text-xl font-bold">Okpanam Road Asaba, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex gap-4">
                <a 
                  href="https://wa.me/2347073860214"
                  target="_blank"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
                >
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase mb-2 block">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase mb-2 block">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-500 outline-none" />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase mb-2 block">Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-500 outline-none appearance-none">
                    <option>Web Development</option>
                    <option>Data Analytics</option>
                    <option>Graphics Design</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-500 uppercase mb-2 block">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-primary-500 outline-none resize-none"></textarea>
                </div>
                <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={LOGO_URL} alt="Logo" className="h-[40px] rounded-md" />
            
              </div>
              <p className="text-slate-600 text-lg max-w-sm mb-6 leading-relaxed">
                Empowering the next generation of digital leaders in Nigeria. Practical skills for real opportunities.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_URL} target="_blank" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-600 transition-all">
                   <Users className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Programs</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Graphics Design</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Content Creation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-slate-900">Company</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#about" className="hover:text-primary-600 transition-colors">About Us</a></li>
                <li><a href="#projects" className="hover:text-primary-600 transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© 2024 Coriftech Solutions. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB for mobile */}
      <a 
        href="https://wa.me/2347073860214"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
      >
        <MessageSquare className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
