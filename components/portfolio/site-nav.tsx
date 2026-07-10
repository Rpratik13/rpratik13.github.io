'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { profile } from '@/lib/portfolio-data';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

export function SiteNav(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = (): void => {
      return setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return (): void => {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return (): void => {
      return observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', {
        'border-b border-transparent': !scrolled,
        'border-border bg-background/80 border-b backdrop-blur-md': scrolled,
      })}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          className="flex items-center gap-2 font-mono text-sm font-semibold"
          href="#top"
        >
          <span className="bg-primary text-primary-foreground grid h-8 w-8 place-items-center rounded-lg">
            PR
          </span>

          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => {
            return (
              <li key={id}>
                <a
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm transition-colors',
                    active === id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  href={`#${id}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            className="bg-primary text-primary-foreground hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:inline-flex"
            download
            href={profile.resumeUrl}
          >
            <Download className="h-4 w-4" />
            Resume
          </a>

          <button
            aria-expanded={open}
            aria-label="Toggle menu"
            className="border-border text-foreground grid h-10 w-10 place-items-center rounded-lg border md:hidden"
            onClick={() => {
              return setOpen((v) => {
                return !v;
              });
            }}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-border bg-background/95 border-t px-5 py-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col">
            {sections.map(({ id, label }) => {
              return (
                <li key={id}>
                  <a
                    className="text-muted-foreground hover:bg-secondary hover:text-foreground block rounded-lg px-3 py-2.5 text-sm"
                    href={`#${id}`}
                    onClick={() => {
                      return setOpen(false);
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                className="bg-primary text-primary-foreground mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium"
                download
                href={profile.resumeUrl}
                onClick={() => {
                  return setOpen(false);
                }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
