import { Reveal } from './reveal';

type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  index,
  subtitle,
  title,
}: SectionHeadingProps): React.ReactElement {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="text-primary font-mono text-sm">{index}</span>

        <span className="bg-primary/50 h-px w-10" />

        <span className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
          {subtitle}
        </span>
      </div>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
