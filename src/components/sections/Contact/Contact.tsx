import { Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { ContactForm } from './ContactForm.js';
import { Github, Linkedin } from '../../common/Icons.js';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0c0d11] relative">
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Let's Build Something Exceptional"
          subtitle="Available for full-time engineering roles, software house contracts, and architectural consulting."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-6">
              <h3 className="text-lg font-bold text-white font-syne">Direct Channels</h3>

              <div className="space-y-4 text-sm font-sans">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-3.5 text-zinc-300 hover:text-cyan-400 transition-colors p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40"
                >
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="truncate text-xs sm:text-sm font-mono">{portfolioData.email}</span>
                </a>

                <div className="flex items-center gap-3.5 text-zinc-300 p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm">{portfolioData.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 mb-3 uppercase">Social Profiles</div>
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
