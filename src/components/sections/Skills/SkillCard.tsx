import type { SkillCategory } from '../../../types/index.js';

interface SkillCardProps {
  category: SkillCategory;
}

export function SkillCard({ category }: SkillCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 backdrop-blur-md hover:border-zinc-700 transition-all duration-300">
      <h3 className="text-lg font-bold text-white font-syne mb-4 pb-2 border-b border-zinc-800/80 flex items-center justify-between">
        <span>{category.title}</span>
        <span className="text-xs font-mono text-cyan-400">{category.skills.length} skills</span>
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-200 font-semibold">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}%</span>
            </div>

            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <p className="text-[11px] text-zinc-400 leading-tight font-sans">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
