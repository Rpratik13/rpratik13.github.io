import { FileText, ArrowUpRight } from 'lucide-react';
import { publications } from '@/lib/portfolio-data';
import { SectionHeading } from './section-heading';
import { Reveal } from './reveal';

export function Publications() {
  return (
    <section id="publications" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          subtitle="Research & writing"
          title="Publications"
        />

        <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/40">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 70}>
              <a
                href={pub.link}
                className="group flex flex-col gap-3 p-6 transition-colors hover:bg-secondary/50 md:flex-row md:items-center md:gap-6 md:p-8"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary">
                  <FileText className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">
                      {pub.year}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">
                      {pub.venue}
                    </span>
                  </div>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-balance">
                    {pub.title}
                  </h3>
                </div>

                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary md:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
