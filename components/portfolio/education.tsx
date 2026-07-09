import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section id="education" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" subtitle="Academics" title="Education" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 md:p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <span className="font-mono text-sm text-primary">
                    {edu.period}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold">{edu.school}</h3>
                  <p className="mt-1 font-medium text-foreground">
                    {edu.degree}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {edu.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
