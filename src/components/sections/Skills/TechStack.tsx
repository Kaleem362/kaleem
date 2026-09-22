import { useState } from 'react';
import { skillsCategories } from '../../../data/skillsData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { SkillCard } from './SkillCard.js';

export function TechStack() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories = selectedFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.title.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="skills" className="py-24 bg-[#0c0d11] relative">
      <Container>
        <SectionHeader
          badge="Technical Stack"
          title="Skills & Engineering Proficiencies"
          subtitle="From low-level data structures to high-performance React frontends and Node.js microservices."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'Frontend', 'Backend', 'Database', 'CS Fundamentals'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter === 'CS Fundamentals' ? 'CS' : filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                (selectedFilter === filter || (filter === 'CS Fundamentals' && selectedFilter === 'CS'))
                  ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
