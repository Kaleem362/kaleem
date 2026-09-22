import { GitCommit, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { Button } from '../../common/Button.js';
import { Github } from '../../common/Icons.js';

export function GithubActivity() {
  const stats = [
    { label: "Active Repositories", value: "24+" },
    { label: "Production Commits", value: "850+" },
    { label: "Pull Requests Merged", value: "95+" },
    { label: "Code Quality Rating", value: "A+" }
  ];

  return (
    <section id="github" className="py-24 bg-[#0c0d11] relative">
      <Container>
        <SectionHeader
          badge="Open Source & Version Control"
          title="GitHub Engineering Activity"
          subtitle="Continuous integration, clean git branching conventions, and open repository contributions."
        />

        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 backdrop-blur-md space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-zinc-800 border border-zinc-700 text-white">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-syne">GitHub Developer Profile</h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">@kaleemullah-dev</p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              href={portfolioData.github}
              target="_blank"
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              View GitHub Profile
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/40 text-center font-mono">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">{s.value}</div>
                <div className="text-[11px] text-zinc-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs font-mono text-zinc-400 space-y-2">
            <div className="text-zinc-200 font-semibold flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              Commit Discipline & Git Workflow:
            </div>
            <p className="text-zinc-400 leading-relaxed font-sans">
              Strict adherence to Conventional Commits standard (<code>feat:</code>, <code>fix:</code>, <code>refactor:</code>, <code>test:</code>), branch protection rules, atomic pull requests, and automated linting before merge.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
