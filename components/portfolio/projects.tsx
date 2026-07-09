import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

export function Projects() {
  return (
    <section id="projects" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" subtitle="Selected work" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.name} delay={(i % 2) * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklch,var(--primary)_60%,transparent)] md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mt-2 text-2xl font-semibold">
                      {project.name}
                    </h3>
                  </div>
                  {/* <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span> */}
                </div>

                <ul className="mt-5 space-y-2">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
