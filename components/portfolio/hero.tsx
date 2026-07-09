import Image from 'next/image';
import { MapPin, ArrowDown } from 'lucide-react';
import { profile } from '@/lib/portfolio-data';
import { SocialLinks } from './social-links';
import { ResumeButton } from './resume-button';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 grid-glow" />
        <div className="absolute -top-32 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-primary/15 blur-3xl animate-float-blob" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-chart-2/10 blur-3xl animate-float-blob [animation-delay:-6s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-5xl">
            Hi, I&apos;m{' '}
            <span className="relative whitespace-nowrap text-primary">
              {profile.name}
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-primary/40"
              />
            </span>
            .
            <br />
            <span className="text-foreground">{profile.role}.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ResumeButton />
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              View Projects
            </a>
            <SocialLinks className="flex items-center gap-2" />
          </div>
        </div>

        {/* Profile picture */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="group relative aspect-square overflow-hidden rounded-[1.75rem] border border-primary/30 bg-card shadow-[0_30px_80px_-40px_color-mix(in_oklch,var(--primary)_70%,transparent)] transition-all duration-500 hover:border-primary/60">
            <Image
              src={profile.avatarUrl}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 20rem, 24rem"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-4 sm:max-w-xl">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_16px_50px_-24px_color-mix(in_oklch,var(--primary)_70%,transparent)]"
          >
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-2xl font-bold text-primary md:text-3xl">
              {s.value}
            </dd>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </dl>

      <div className="mx-auto mt-16 flex max-w-6xl items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
        Scroll to explore
      </div>
    </section>
  );
}
