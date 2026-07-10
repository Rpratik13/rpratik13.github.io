import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Skills } from '@/components/portfolio/skills';
import { Footer } from '@/components/portfolio/footer';
import { SiteNav } from '@/components/portfolio/site-nav';
import { Projects } from '@/components/portfolio/projects';
import { Education } from '@/components/portfolio/education';
import { Experience } from '@/components/portfolio/experience';
import { Publications } from '@/components/portfolio/publications';

export default function Page(): React.ReactElement {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
