import { MapPin } from 'lucide-react';
import { experience } from '@/lib/portfolio-data';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          subtitle="Career"
          title="Experience Timeline"
        />

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-1.75 top-2 bottom-2 w-px bg-linear-to-b from-primary via-border to-transparent md:left-2.25"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => (
              <Reveal
                as="li"
                key={job.company}
                delay={i * 80}
                className="relative pl-8 md:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background md:h-5 md:w-5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>

                <div className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {job.role}
                    </h3>
                    <span className="font-mono text-sm text-primary">
                      {job.period}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {job.company}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>

                  {/* <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p> */}

                  <ul className="mt-5 space-y-2.5">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>
                          {point.text}
                          {point.highlight && (
                            <mark className="rounded-md bg-highlight/20 px-1.5 py-0.5 font-semibold text-highlight">
                              {point.highlight}
                            </mark>
                          )}

                          {point.textAfter && point.textAfter}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
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
          </ol>
        </div>
      </div>
    </section>
  );
}
