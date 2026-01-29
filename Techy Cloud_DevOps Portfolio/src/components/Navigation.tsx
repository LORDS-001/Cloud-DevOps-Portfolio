import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "../components/ui/button";

import { ChevronDown, FileText} from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Personal", href: "#personal" },
    { label: "Certifications", href: "#certifications" },
    { label: "Live Metrics", href: "#system-status" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-1">
            <a href="#" className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold text-xl">DevOps</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          {/* CTA Button Wrapper (Right) */}
          <div className="hidden md:flex flex-1 justify-end relative group">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20">
              Download CV
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>

            {/* Dropdown Menu - Shows on Hover */}
            <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
              <a 
                href="public/Adedokun Daniel Cloud CV.pdf" 
                download 
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border-b border-slate-800"
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium">PDF Version</span>
              </a>
              <a 
                href="public/Adedokun Daniel Cloud CV.docx" 
                download 
                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">DOCX Version</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}