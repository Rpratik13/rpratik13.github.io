'use client';

import { Download } from 'lucide-react';

import { cn } from '@/lib/utils';
import { profile } from '@/lib/portfolio-data';

type Props = {
  variant?: 'outline' | 'solid';
  label?: string;
  className?: string;
};

export function ResumeButton({
  className,
  label = 'Download Résumé',
  variant = 'solid',
}: Props): React.ReactElement {
  return (
    <a download href={profile.resumeUrl}>
      <button
        aria-label={label}
        className={cn(
          'group inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all',
          variant === 'solid'
            ? 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-12px_color-mix(in_oklch,var(--primary)_70%,transparent)]'
            : 'border-border text-foreground hover:border-primary/60 hover:text-primary border hover:-translate-y-0.5',
          className,
        )}
        type="button"
      >
        <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
        {label}
      </button>
    </a>
  );
}
