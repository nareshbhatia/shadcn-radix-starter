import { Heading3 } from '../../../components/Typography/Typography';
import { cn } from '../../../utils/cn';

const textSizes = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl',
] as const;

export function TypographyPage() {
  return (
    <div className="flex flex-col gap-12 px-8 py-4">
      {/* font-sans */}
      <div className="flex flex-col gap-2">
        <Heading3>font-sans</Heading3>
        {textSizes.map((textSize) => (
          <div key={textSize} className={cn(textSize)}>
            {textSize}
          </div>
        ))}
      </div>

      {/* font-mono */}
      <div className="flex flex-col gap-2 font-mono">
        <Heading3>font-mono</Heading3>
        {textSizes.map((textSize) => (
          <div key={textSize} className={cn(textSize)}>
            {textSize}
          </div>
        ))}
      </div>
    </div>
  );
}
