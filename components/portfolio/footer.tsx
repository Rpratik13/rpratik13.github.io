import { Mail } from 'lucide-react';
import { profile } from '@/lib/portfolio-data';
import { SocialLinks } from './social-links';
import { Reveal } from './reveal';
import { ResumeButton } from './resume-button';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 py-20 md:px-8 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute bottom-0 left-1/2 h-80 w-160 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <span className="font-mono text-sm text-primary">
            Let&apos;s build together
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Ready for a new opportunity.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I&apos;m currently looking to join a high-impact engineering team full-time. If you&apos;re hiring, have an open role, or just want to talk shop about distributed systems, I&apos;d love to chat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-5 w-5" />
              {profile.email}
            </a>
            <ResumeButton variant="outline" label="Résumé" />
          </div>

          <SocialLinks className="mt-8 flex items-center justify-center gap-3" />
        </Reveal>

        <p className="mt-16 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
