/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  Award, 
  Briefcase,
  ChevronRight,
  Download
} from 'lucide-react';

const skills = [
  { name: 'React JS', level: 90 },
  { name: 'Node JS', level: 75 },
  { name: 'Python', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'HTML/CSS', level: 95 },
];

const certificates = [
  "Software Testing NPTEL",
  "Cloud Computing NPTEL",
  "Introduction To Industrial Internet Of Things NPTEL",
  "Html and Css in Infosys Spring Board"
];

const education = [
  {
    period: "2021 - 2025",
    institution: "National Engineering College Kovilpatti",
    degree: "B.E (Computer Science and Engineering)",
    score: "7.7 CGPA"
  },
  {
    period: "2020 - 2021",
    institution: "Thayilpatti",
    degree: "Higher Secondary",
    score: "85.9%"
  }
];

const experience = [
  {
    company: "Aroganam Technologies",
    role: "Frontend Development Intern",
    description: "Worked as a Frontend Development Intern, contributing to the design and development of responsive, user-friendly web applications using modern JavaScript frameworks and UI libraries.",
    projects: [
      {
        name: "IMF Web Application",
        details: [
          "Developed the complete frontend of the IMF project using React JS.",
          "Implemented a clean and responsive UI using Bootstrap and Material UI.",
          "Built dynamic components and optimized user workflows for better performance.",
          "Delivered a fast, modern, and intuitive interface improving overall user experience."
        ]
      },
      {
        name: "CropSmile Agriculture Platform",
        details: [
          "Developed an agriculture-focused web platform providing detailed information on various crops.",
          "Enabled farmers and buyers to access crop data, pricing insights, and agricultural guidance easily.",
          "Designed a clean, user-friendly interface ensuring quick navigation and informed decision-making."
        ]
      }
    ]
  }
];

const projects = [
  {
    title: "FoodieHub - Food Delivery Website",
    description: "A comprehensive food delivery platform featuring real-time menu browsing, cart management, and a seamless checkout experience. Built with a focus on high-performance and mobile-first design.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node", "CSS", "MongoDB"],
    link: "#",
    isLive: false
  },
  {
    title: "IMF - Mountaineering & Trekking Portal",
    description: "A comprehensive platform for mountaineering enthusiasts and trekking guides. Built to manage expeditions, track routes, and provide real-time weather updates for high-altitude adventures.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    tags: ["Java Spring Boot", "React", "CSS", "Material UI", "MySQL"],
    link: "#"
  },
  {
    title: "CropSmile Agriculture Platform",
    description: "An innovative digital solution for the agricultural sector, connecting farmers with vital crop data and market insights to drive informed decision-making.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node", "MongoDB", "Material UI", "Bootstrap"],
    link: "#"
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white bg-surface text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">RENUAGDEVI.R</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="text-slate-400 hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-accent transition-colors">Experience</a>
            <a href="#education" className="text-slate-400 hover:text-accent transition-colors">Education</a>
            <a href="#contact" className="text-slate-400 hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
            Computer Science Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">
            Full Stack <br />
            <span className="text-accent">Developer</span>.
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            To utilize acquired knowledge in computer science to develop innovative software solutions and contribute to cutting-edge technological advancements.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-accent text-white rounded-2xl font-semibold hover:bg-accent/80 transition-all shadow-lg shadow-accent/20">
              Get in touch
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-800 relative z-10 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Renuagdevi R" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-0" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-0" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>
            <div className="md:col-span-2 space-y-8 text-slate-400 text-xl leading-relaxed font-light">
              <p>
                I am a passionate Computer Science Engineer with a strong foundation in frontend development. My journey in tech is driven by a desire to create intuitive and efficient web solutions that solve real-world problems.
              </p>
              <p>
                During my internship at Aroganam Technologies, I honed my skills in React JS and modern UI libraries, delivering projects like the IMF Web Application and CropSmile Agriculture Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="p-10 rounded-[2rem] card-bg transition-all"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl text-white">{skill.name}</h3>
                  <span className="text-accent font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-accent shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Certificates */}
            <div className="lg:col-span-3 mt-20">
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-white">
                <Award className="text-accent" />
                Certifications
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="p-6 rounded-2xl card-bg text-sm font-medium flex items-start gap-4 hover:border-accent/30 transition-colors">
                    <ChevronRight className="text-accent mt-0.5 shrink-0" size={18} />
                    <span className="text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">My Projects</h2>
              <p className="text-slate-400 text-lg max-w-xl font-light">
                A collection of projects that demonstrate my technical capabilities and problem-solving approach.
              </p>
            </div>
            <div className="w-20 h-1 bg-accent rounded-full hidden md:block" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-[2.5rem] overflow-hidden card-bg hover:border-accent/30 transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <a href={project.link} className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent text-white font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ExternalLink size={18} />
                      {project.isLive ? "Live Demo" : "View Project"}
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Professional Experience</h2>
          <div className="space-y-24">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-12 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <div className="flex flex-wrap justify-between items-start mb-8 gap-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-accent font-semibold flex items-center gap-2 text-lg">
                      <Briefcase size={20} />
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm font-medium">
                    Internship
                  </span>
                </div>
                <p className="text-slate-400 mb-12 max-w-4xl text-lg leading-relaxed font-light">
                  {exp.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="p-8 rounded-[2.5rem] card-bg hover:border-accent/20 transition-all">
                      <h4 className="font-bold text-xl mb-6 flex items-center gap-3 text-white">
                        <Code2 className="text-accent" size={24} />
                        {project.name}
                      </h4>
                      <ul className="space-y-4">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-slate-400 text-sm flex gap-4 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            <GraduationCap className="text-accent" size={40} />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-[2.5rem] card-bg group hover:border-accent/40 transition-all"
              >
                <span className="text-accent font-mono text-sm mb-4 block tracking-widest">{edu.period}</span>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{edu.institution}</h3>
                <p className="text-slate-400 mb-6 text-lg">{edu.degree}</p>
                <div className="inline-block px-4 py-1.5 rounded-xl bg-accent/10 text-accent text-sm font-bold border border-accent/20">
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="card-bg rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px] -mr-80 -mt-80" />
            
            <div className="grid lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <h2 className="text-5xl font-bold mb-8 leading-tight">Let's build <br />something great.</h2>
                <p className="text-slate-400 text-xl mb-16 font-light leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Email</p>
                      <a href="mailto:ranuga262004@gmail.com" className="text-xl font-bold text-white hover:text-accent transition-colors">
                        ranuga262004@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Phone</p>
                      <p className="text-xl font-bold text-white">7826935308</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Location</p>
                      <p className="text-xl font-bold text-white">TamilNadu Sivakasi</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 tracking-wider">NAME</label>
                    <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 tracking-wider">EMAIL</label>
                    <input type="email" className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-400 tracking-wider">MESSAGE</label>
                  <textarea rows={5} className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none" placeholder="How can I help you?" />
                </div>
                <button className="w-full py-6 bg-accent text-white rounded-2xl font-bold hover:bg-accent/80 transition-all shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 text-lg">
                  Send Message
                  <ChevronRight size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-tighter text-white block mb-2">RENUAGDEVI.R</span>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-accent transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-accent transition-all transform hover:scale-110">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
