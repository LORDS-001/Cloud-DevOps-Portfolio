import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">DevOps Portfolio</span>
          </div>
          
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} Cloud & DevOps Engineer. Built with React and Tailwind CSS.
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
