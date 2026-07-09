import { skills } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"

export function Skills() {
  return (
    <section id="skills" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" subtitle="Toolbox" title="Technical Skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 70}>
              <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
