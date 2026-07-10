import { ArrowUpRight, FileText } from 'lucide-react';

import { publications } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Publications(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="publications">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          subtitle="Research & writing"
          title="Publications"
        />

        <div className="divide-border border-border bg-card/40 flex flex-col divide-y overflow-hidden rounded-2xl border">
          {publications.map((pub, i) => {
            return (
              <Reveal delay={i * 70} key={pub.title}>
                <a
                  className="group hover:bg-secondary/50 flex flex-col gap-3 p-6 transition-colors md:flex-row md:items-center md:gap-6 md:p-8"
                  href={pub.link}
                >
                  <span className="border-border bg-background text-primary grid h-11 w-11 shrink-0 place-items-center rounded-xl border">
                    <FileText className="h-5 w-5" />
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-mono text-xs">
                        {pub.year}
                      </span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-muted-foreground text-xs">
                        {pub.venue}
                      </span>
                    </div>
                    <h3 className="mt-1 text-lg leading-snug font-semibold text-balance">
                      {pub.title}
                    </h3>
                  </div>

                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary hidden h-5 w-5 shrink-0 transition-colors md:block" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
