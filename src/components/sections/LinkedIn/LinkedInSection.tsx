import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { Button } from '../../common/Button.js';
import { Linkedin } from '../../common/Icons.js';

export function LinkedInSection() {
  return (
    <section id="linkedin" className="py-24 bg-[#09090b] relative">
      <Container>
        <SectionHeader
          badge="Professional Network"
          title="Connect on LinkedIn"
          subtitle="Open for engineering collaborations, tech dialogues, and full-time or contract MERN opportunities."
        />

        <div className="max-w-3xl mx-auto rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-8 backdrop-blur-md text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#0077B5]/20 border border-[#0077B5]/40 text-[#0077B5] flex items-center justify-center mx-auto">
            <Linkedin className="w-8 h-8 fill-current" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white font-syne">Let's Expand the Professional Network</h3>
            <p className="text-sm text-zinc-400 max-w-lg mx-auto font-sans leading-relaxed">
              I share insights on React state patterns, Node.js backend performance, and architectural best practices. Always open to discussing software house engineering challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              href={portfolioData.linkedin}
              target="_blank"
              icon={<Linkedin className="w-4 h-4 fill-current" />}
              iconRight={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
