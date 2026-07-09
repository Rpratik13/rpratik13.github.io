import { Fragment } from "react"

// Matches numbers with optional units/symbols: 15k, 200M+, $180M, 94%, 3.2k, 10x, 3.9/4.0, 2ms
const NUM_RE =
  /(\$?\d[\d,.]*\s?(?:%|x|k|K|M|B|ms|\/[\d.]+|\+)?\+?(?:\s?(?:ops\/sec|events|stars|users|contributors|MAU))?)/g

export function HighlightNumbers({ text }: { text: string }) {
  const parts = text.split(NUM_RE)

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null
        // Odd indices are the captured numeric groups
        const isNumber = i % 2 === 1
        return isNumber ? (
          <span
            key={i}
            className="font-semibold text-primary"
          >
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      })}
    </>
  )
}
