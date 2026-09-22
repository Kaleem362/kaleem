import { Heart, ArrowUp, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { Container } from '../common/Container.js';
import { Github, Linkedin } from '../common/Icons.js';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5">
                <div className="w-full h-full bg-[#09090b] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-syne font-bold text-xl text-white">Kaleem Ullah</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-sans">
              Full Stack MERN Developer with a Computer Science degree. Crafting production-ready applications with high-performance React frontends and resilient Node.js / MongoDB backends.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Narrative</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Stack</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#journey" className="hover:text-cyan-400 transition-colors">CS to MERN Journey</a></li>
              <li><a href="#expertise" className="hover:text-cyan-400 transition-colors">Technical Expertise</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-4">
              Architecture Focus
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-mono text-xs">
              <li className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> React.js & TypeScript</li>
              <li className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> Node.js & Express REST APIs</li>
              <li className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> MongoDB Aggregations</li>
              <li className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> Core Data Structures & OOP</li>
              <li className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> Tailwind CSS & UI Design</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Kaleem Ullah. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
            <span>using React, Tailwind CSS & Vite.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
