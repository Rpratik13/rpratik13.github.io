import { Mail } from 'lucide-react';

import { profile } from '@/lib/portfolio-data';

import { Reveal } from './reveal';
import { SocialLinks } from './social-links';
import { ResumeButton } from './resume-button';

export function Footer(): React.ReactElement {
  return (
    <footer className="border-border relative overflow-hidden border-t px-5 py-20 md:px-8 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="bg-primary/10 absolute bottom-0 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="text-primary font-mono text-sm">
            Let&apos;s build together
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Ready for a new opportunity.
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-xl leading-relaxed text-pretty">
            I&apos;m currently looking to join a high-impact engineering team
            full-time. If you&apos;re hiring, have an open role, or just want to
            talk shop about distributed systems, I&apos;d love to chat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-transform hover:-translate-y-0.5"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-5 w-5" />

              {profile.email}
            </a>
            <ResumeButton label="Résumé" variant="outline" />
          </div>

          <SocialLinks className="mt-8 flex items-center justify-center gap-3" />
        </Reveal>

        <p className="text-muted-foreground mt-16 font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
