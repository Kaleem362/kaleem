import { Cpu, Database, Layout, Server } from 'lucide-react';
import { expertisePillars } from '../../../data/expertiseData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';

export function TechnicalExpertise() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Server': return <Server className="w-6 h-6 text-blue-400" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      default: return <Server className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-24 bg-[#09090b] relative">
      <Container>
        <SectionHeader
          badge="Engineering Pillars"
          title="Technical Expertise"
          subtitle="The four foundational disciplines that power my software development workflow."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertisePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 backdrop-blur-md hover:border-zinc-700 transition-all duration-300 space-y-5"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-zinc-800/80 border border-zinc-700/60">
                  {getIcon(pillar.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-syne">{pillar.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">{pillar.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {pillar.description}
              </p>

              <ul className="space-y-2 pt-2 border-t border-zinc-800/60 text-xs sm:text-sm text-zinc-400">
                {pillar.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
