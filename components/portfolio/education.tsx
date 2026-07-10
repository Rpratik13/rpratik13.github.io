import { GraduationCap } from 'lucide-react';

import { education } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Education(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="education">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" subtitle="Academics" title="Education" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => {
            return (
              <Reveal delay={i * 80} key={edu.school}>
                <div className="border-border bg-card/60 hover:border-primary/40 flex h-full gap-4 rounded-2xl border p-6 transition-colors md:p-8">
                  <span className="bg-primary/12 text-primary grid h-12 w-12 shrink-0 place-items-center rounded-xl">
                    <GraduationCap className="h-6 w-6" />
                  </span>

                  <div>
                    <span className="text-primary font-mono text-sm">
                      {edu.period}
                    </span>

                    <h3 className="mt-1 text-xl font-semibold">{edu.school}</h3>

                    <p className="text-foreground mt-1 font-medium">
                      {edu.degree}
                    </p>

                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {edu.detail}
                    </p>
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
