import { Fragment } from 'react';

const NUM_RE =
  /(\$?\d[\d,.]*\s?(?:%|x|k|K|M|B|ms|\/[\d.]+|\+)?\+?(?:\s?(?:ops\/sec|events|stars|users|contributors|MAU))?)/g;

export function HighlightNumbers({
  text,
}: {
  text: string;
}): React.ReactElement {
  const parts = text.split(NUM_RE);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) {
          return null;
        }

        const isNumber = i % 2 === 1;

        if (isNumber) {
          return (
            <span className="text-primary font-semibold" key={i}>
              {part}
            </span>
          );
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
