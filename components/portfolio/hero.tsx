import Image from 'next/image';
import { ArrowDown, MapPin } from 'lucide-react';

import { profile } from '@/lib/portfolio-data';

import { SocialLinks } from './social-links';
import { ResumeButton } from './resume-button';

export function Hero(): React.ReactElement {
  return (
    <section
      className="relative overflow-hidden px-5 pt-32 pb-20 md:px-8 md:pt-40"
      id="top"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          alt=""
          className="object-cover opacity-40"
          fill
          priority
          src="/images/hero-bg.png"
        />

        <div className="from-background/70 via-background/85 to-background absolute inset-0 bg-linear-to-b" />

        <div className="grid-glow absolute inset-0" />

        <div className="bg-primary/15 animate-float-blob absolute -top-32 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full blur-3xl" />

        <div className="bg-chart-2/10 animate-float-blob absolute top-40 right-0 h-72 w-72 rounded-full blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="border-border bg-card/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-dot bg-primary absolute inline-flex h-full w-full rounded-full" />

              <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl md:text-5xl">
            Hi, I&apos;m{' '}
            <span className="text-primary relative whitespace-nowrap">
              {profile.name}

              <span
                aria-hidden="true"
                className="bg-primary/40 absolute -bottom-1 left-0 h-1 w-full rounded-full"
              />
            </span>
            .
            <br />
            <span className="text-foreground">{profile.role}.</span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {profile.tagline}
          </p>

          <div className="text-muted-foreground mt-5 flex items-center gap-2 text-sm">
            <MapPin className="text-primary h-4 w-4" />

            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ResumeButton />

            <a
              className="border-border text-foreground hover:border-primary/60 hover:text-primary inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all hover:-translate-y-0.5"
              href="#projects"
            >
              View Projects
            </a>

            <SocialLinks className="flex items-center gap-2" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden="true"
            className="bg-primary/10 absolute -inset-4 rounded-[2rem] blur-2xl"
          />
          <div className="group border-primary/30 bg-card hover:border-primary/60 relative aspect-square overflow-hidden rounded-[1.75rem] border shadow-[0_30px_80px_-40px_color-mix(in_oklch,var(--primary)_70%,transparent)] transition-all duration-500">
            <Image
              alt={`Portrait of ${profile.name}`}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              fill
              priority
              sizes="(max-width: 1024px) 20rem, 24rem"
              src={profile.avatarUrl}
            />

            <div className="from-background/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-6xl grid-cols-3 gap-4 sm:max-w-xl">
        {profile.stats.map((s) => {
          return (
            <div
              className="border-border bg-card/50 hover:border-primary/50 hover:bg-card rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_-24px_color-mix(in_oklch,var(--primary)_70%,transparent)]"
              key={s.label}
            >
              <dt className="sr-only">{s.label}</dt>

              <dd className="text-primary text-2xl font-bold md:text-3xl">
                {s.value}
              </dd>

              <p className="text-muted-foreground mt-1 text-xs">{s.label}</p>
            </div>
          );
        })}
      </dl>

      <div className="text-muted-foreground mx-auto mt-16 flex max-w-6xl items-center gap-2 text-xs tracking-[0.2em] uppercase">
        <ArrowDown className="text-primary h-4 w-4 animate-bounce" />
        Scroll to explore
      </div>
    </section>
  );
}
