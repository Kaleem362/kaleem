import { Navbar } from './components/layout/Navbar.js';
import { Footer } from './components/layout/Footer.js';
import { Hero } from './components/sections/Hero/Hero.js';
import { About } from './components/sections/About/About.js';
import { TechStack } from './components/sections/Skills/TechStack.js';
import { FeaturedProjects } from './components/sections/Projects/FeaturedProjects.js';
import { DevelopmentJourney } from './components/sections/Journey/DevelopmentJourney.js';
import { TechnicalExpertise } from './components/sections/Expertise/TechnicalExpertise.js';
import { Experience } from './components/sections/Experience/Experience.js';
import { Education } from './components/sections/Education/Education.js';
import { GithubActivity } from './components/sections/Github/GithubActivity.js';
import { LinkedInSection } from './components/sections/LinkedIn/LinkedInSection.js';
import { Contact } from './components/sections/Contact/Contact.js';

export function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <DevelopmentJourney />
        <TechnicalExpertise />
        <Experience />
        <Education />
        <GithubActivity />
        <LinkedInSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
