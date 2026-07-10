import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function About(): React.ReactElement {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28" id="about">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="00" subtitle="Who I am" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                I am a full-stack software engineer with an M.S. in Computer
                Science and{' '}
                <span className="text-foreground font-semibold">5+ years</span>{' '}
                of experience designing systems that scale gracefully and
                interfaces that feel effortless. I thrive at the seams where the
                database, the API, and the UI meet specializing in scalable
                application architecture, API integration, and high-performance
                code development across Java, Node.js, .NET, and React.
              </p>

              <p>
                My work spans{' '}
                <span className="text-foreground font-semibold">
                  distributed backends
                </span>
                ,{' '}
                <span className="text-foreground font-semibold">
                  real-time data pipelines
                </span>
                , and{' '}
                <span className="text-foreground font-semibold">
                  type-safe frontends
                </span>
                . Beyond writing production-grade code, I have a proven record
                of leading small teams and modernizing legacy codebases. I care
                deeply about performance, developer experience, and shipping
                accessible software that people genuinely enjoy using.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={120}>
            <ul className="space-y-3">
              {[
                'End-to-end product ownership',
                'Distributed systems & databases',
                'Clean, tested, maintainable code',
                'Mentoring & technical leadership',
              ].map((item) => {
                return (
                  <li
                    className="border-border bg-card/60 flex items-center gap-3 rounded-xl border px-4 py-3"
                    key={item}
                  >
                    <span className="bg-primary h-2 w-2 shrink-0 rounded-full" />

                    <span className="text-foreground">{item}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
