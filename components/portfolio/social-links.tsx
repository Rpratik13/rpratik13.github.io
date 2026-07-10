import { profile } from '@/lib/portfolio-data';

type IconProps = { className?: string };

function GithubIcon({ className }: IconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.3-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.75.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LeetcodeIcon({ className }: IconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.48 0a1.37 1.37 0 0 0-.96.42L7.05 6.09 3.4 9.86a5.35 5.35 0 0 0 0 7.44l3.65 3.77 5.47 5.67a1.37 1.37 0 0 0 1.95-1.92l-5.47-5.67a2.61 2.61 0 0 1 0-3.61l3.65-3.77 5.47-5.67A1.37 1.37 0 0 0 13.48 0Z"
        opacity=".55"
      />
      <path d="M9.4 15.27a1.37 1.37 0 0 0 0 2.73h11.23a1.37 1.37 0 0 0 0-2.73H9.4ZM18.6 6.4l-3.32-3.44a1.37 1.37 0 0 0-1.95 1.9l3.32 3.44a1.37 1.37 0 1 0 1.95-1.9Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps): React.ReactElement {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.53C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const links = [
  { href: profile.socials.github, Icon: GithubIcon, label: 'GitHub' },
  { href: profile.socials.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
  { href: profile.socials.leetcode, Icon: LeetcodeIcon, label: 'LeetCode' },
];

export function SocialLinks({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return (
    <div className={className}>
      {links.map(({ href, Icon, label }) => {
        return (
          <a
            aria-label={label}
            className="group border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_color-mix(in_oklch,var(--primary)_12%,transparent)]"
            href={href}
            key={label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
