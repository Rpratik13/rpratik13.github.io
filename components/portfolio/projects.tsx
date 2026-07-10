import { Check } from 'lucide-react';

import { projects } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Projects(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" subtitle="Selected work" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            return (
              <Reveal as="article" delay={(i % 2) * 80} key={project.name}>
                <div className="group border-border bg-card/60 hover:border-primary/50 flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_color-mix(in_oklch,var(--primary)_60%,transparent)] md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mt-2 text-2xl font-semibold">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {project.points.map((point) => {
                      return (
                        <li
                          className="flex gap-2.5 text-sm leading-relaxed"
                          key={point}
                        >
                          <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.stack.map((tech) => {
                      return (
                        <span
                          className="border-border bg-secondary text-muted-foreground rounded-md border px-2.5 py-1 font-mono text-xs"
                          key={tech}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
