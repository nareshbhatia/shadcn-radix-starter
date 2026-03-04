import { cn } from '../../../utils/cn';

interface ColorSwatchProps {
  bg: string;
  text: string;
  bgLabel: string;
  textLabel: string;
}

export function ColorSwatch({
  bg,
  text,
  bgLabel,
  textLabel,
}: ColorSwatchProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center border-2 rounded-lg h-16',
        bg,
      )}
    >
      <span className={cn('font-mono text-sm', text)}>{bgLabel}</span>
      <span className={cn('font-mono text-sm', text)}>{textLabel}</span>
    </div>
  );
}
