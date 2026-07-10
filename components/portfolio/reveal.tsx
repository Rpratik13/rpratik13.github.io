'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'article' | 'div' | 'li' | 'section';
};

export function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
}: RevealProps): React.ReactElement {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      // eslint-disable-next-line
      setVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.15 },
    );

    observer.observe(node);

    return (): void => {
      return observer.disconnect();
    };
  }, []);

  const Tag = as as 'div';

  return (
    <Tag
      className={cn('reveal', visible && 'is-visible', className)}
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
