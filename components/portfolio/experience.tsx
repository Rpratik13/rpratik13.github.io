import { MapPin } from 'lucide-react';

import { experience } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Experience(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="experience">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          subtitle="Career"
          title="Experience Timeline"
        />

        <div className="relative">
          <span
            aria-hidden="true"
            className="from-primary via-border absolute top-2 bottom-2 left-1.75 w-px bg-linear-to-b to-transparent md:left-2.25"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => {
              return (
                <Reveal
                  as="li"
                  className="relative pl-8 md:pl-12"
                  delay={i * 80}
                  key={job.company}
                >
                  <span
                    aria-hidden="true"
                    className="border-primary bg-background absolute top-1.5 left-0 grid h-4 w-4 place-items-center rounded-full border-2 md:h-5 md:w-5"
                  >
                    <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  </span>

                  <div className="border-border bg-card/60 hover:border-primary/40 rounded-2xl border p-6 transition-colors md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-xl font-semibold md:text-2xl">
                        {job.role}
                      </h3>

                      <span className="text-primary font-mono text-sm">
                        {job.period}
                      </span>
                    </div>

                    <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="text-foreground font-medium">
                        {job.company}
                      </span>

                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.points.map((point, idx) => {
                        return (
                          <li className="flex gap-3 leading-relaxed" key={idx}>
                            <span
                              aria-hidden="true"
                              className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                            />

                            <span>
                              {point.text}

                              {point.highlight && (
                                <mark className="bg-highlight/20 text-highlight rounded-md px-1.5 py-0.5 font-semibold">
                                  {point.highlight}
                                </mark>
                              )}

                              {point.textAfter && point.textAfter}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.stack.map((tech) => {
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
          </ol>
        </div>
      </div>
    </section>
  );
}
