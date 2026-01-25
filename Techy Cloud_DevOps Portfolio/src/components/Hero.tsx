import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mt-24 md:mt-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">Available for Opportunities</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cloud & DevOps Engineer
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Architecting scalable infrastructure and automating deployment pipelines
        </motion.p>

        <motion.p 
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Specializing in AWS, Kubernetes, Docker, Terraform, and CI/CD automation
          with 3+ years of experience building resilient cloud-native solutions.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View Projects
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-white border-slate-300 text-black hover:bg-slate-100">
            <a href="public/Adedokun Daniel Cloud CV.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="https://www.github.com/LORDS-001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:border-blue-500/50 transition-all"
          >
            <Github className="w-5 h-5 text-slate-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-adedokun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:border-blue-500/50 transition-all"
          >
            <Linkedin className="w-5 h-5 text-slate-300" />
          </a>
          <a
            href="mailto:adedokundaniel16@gmail.com"
            className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:border-blue-500/50 transition-all"
          >
            <Mail className="w-5 h-5 text-slate-300" />
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}