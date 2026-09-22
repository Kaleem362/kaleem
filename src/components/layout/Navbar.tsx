import { useState } from 'react';
import { Menu, X, Terminal, Code2 } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition.js';
import { Button } from '../common/Button.js';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { scrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#09090b] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-bold text-lg text-white tracking-wide flex items-center gap-1.5">
              Kaleem Ullah
              <span className="text-cyan-400 font-mono text-xs font-normal border border-cyan-500/30 rounded px-1.5 py-0.2 bg-cyan-500/10">MERN</span>
            </span>
            <span className="text-[11px] font-mono text-zinc-400 -mt-0.5">CS Graduate & Engineer</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            href="#contact"
            icon={<Terminal className="w-3.5 h-3.5" />}
          >
            Hire Me
          </Button>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0e11] border-b border-zinc-800 px-4 pt-3 pb-6 mt-2 shadow-2xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              href="#contact"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
