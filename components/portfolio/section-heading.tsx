import { Reveal } from "./reveal"

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-primary">{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {subtitle}
        </span>
      </div>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
