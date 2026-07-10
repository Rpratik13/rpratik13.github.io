import { skills } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Skills(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="skills">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          subtitle="Toolbox"
          title="Technical Skills"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            return (
              <Reveal delay={(i % 3) * 70} key={group.category}>
                <div className="border-border bg-card/60 h-full rounded-2xl border p-6">
                  <h3 className="text-primary flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
                    <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                    {group.category}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      return (
                        <span
                          className="border-border bg-secondary text-foreground hover:border-primary/50 hover:text-primary rounded-lg border px-3 py-1.5 text-sm transition-colors"
                          key={item}
                        >
                          {item}
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
