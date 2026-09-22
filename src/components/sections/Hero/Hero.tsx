import { ArrowRight, Code, Database, Server, Sparkles, FileText } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData.js';
import { Container } from '../../common/Container.js';
import { Button } from '../../common/Button.js';
import { HeroTerminal } from './HeroTerminal.js';
import { Github, Linkedin } from '../../common/Icons.js';

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/70 text-xs font-mono text-zinc-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for MERN Stack Roles & Engineering Projects</span>
            </div>

            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm tracking-wide uppercase font-semibold">
                Hi, my name is
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight font-syne leading-[1.1]">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-syne">
                {portfolioData.title} & CS Graduate
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              {portfolioData.tagline}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-zinc-400">
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-200">
                <Code className="w-3.5 h-3.5 text-cyan-400" /> React.js & TS
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-200">
                <Server className="w-3.5 h-3.5 text-blue-400" /> Node.js & Express
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-200">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> MongoDB Aggregations
              </span>
              <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 text-zinc-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> CS Fundamentals & DSA
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<FileText className="w-4 h-4 text-cyan-400" />}
              >
                Contact & Hire
              </Button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800/80">
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-black text-white font-syne">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <HeroTerminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
