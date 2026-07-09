import { SiteNav } from "@/components/portfolio/site-nav"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Publications } from "@/components/portfolio/publications"
import { Education } from "@/components/portfolio/education"
import { Skills } from "@/components/portfolio/skills"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
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
  )
}
