'use client';

import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { profile } from '@/lib/portfolio-data';

type Props = {
  variant?: 'solid' | 'outline';
  label?: string;
  className?: string;
};

export function ResumeButton({
  variant = 'solid',
  label = 'Download Résumé',
  className,
}: Props) {
  return (
    <a href={profile.resumeUrl} download>
      <button
        type="button"
        aria-label={label}
        className={cn(
          'group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all cursor-pointer',
          variant === 'solid'
            ? 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-12px_color-mix(in_oklch,var(--primary)_70%,transparent)]'
            : 'border border-border text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary',
          className,
        )}
      >
        <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
        {label}
      </button>
    </a>
  );
}
