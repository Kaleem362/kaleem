import { journeyMilestones } from '../../../data/journeyData.js';
import { Container } from '../../common/Container.js';
import { SectionHeader } from '../../common/SectionHeader.js';
import { TimelineMilestone } from './TimelineMilestone.js';

export function DevelopmentJourney() {
  return (
    <section id="journey" className="py-24 bg-[#0c0d11] relative">
      <Container>
        <SectionHeader
          badge="Evolutionary Path"
          title="From Computer Science to Full-Stack MERN"
          subtitle="A structured, deliberate progression from algorithmic theory to high-performance cloud web systems."
        />

        <div className="max-w-3xl mx-auto">
          {journeyMilestones.map((milestone) => (
            <TimelineMilestone
              key={milestone.title}
              milestone={milestone}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
