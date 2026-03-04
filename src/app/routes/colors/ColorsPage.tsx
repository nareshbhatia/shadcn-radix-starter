import { ColorSwatch } from './ColorSwatch';
import { Heading3 } from '../../../components/Typography/Typography';
import { AccentEnum } from '../../../types/Accent';
import { accentToColor } from '../../../utils/accentToColor';

import type { Accent } from '../../../types/Accent';

const shadcnColors = [
  { bg: 'bg-background', text: 'text-foreground' },
  { bg: 'bg-card', text: 'text-card-foreground' },
  { bg: 'bg-popover', text: 'text-popover-foreground' },
  { bg: 'bg-primary', text: 'text-primary-foreground' },
  { bg: 'bg-secondary', text: 'text-secondary-foreground' },
  { bg: 'bg-muted', text: 'text-muted-foreground' },
  { bg: 'bg-accent', text: 'text-accent-foreground' },
  { bg: 'bg-destructive/10 dark:bg-destructive/20', text: 'text-destructive' },
  { bg: 'bg-background', text: 'text-destructive' },
  { bg: 'bg-background', text: 'text-primary' },
] as const;

const severityColors = [
  { bg: 'bg-background', text: 'text-foreground' },
  { bg: 'bg-background', text: 'text-success' },
  { bg: 'bg-background', text: 'text-warning' },
  { bg: 'bg-background', text: 'text-error' },
] as const;

const severityColorsContrast = [
  { bg: 'bg-info', text: 'text-info-foreground' },
  { bg: 'bg-success', text: 'text-success-foreground' },
  { bg: 'bg-warning', text: 'text-warning-foreground' },
  { bg: 'bg-error', text: 'text-error-foreground' },
] as const;

const accents = Object.values(AccentEnum) as Accent[];

const accentColors = [
  ...accents.map((accent) => {
    const colors = accentToColor(accent);
    return {
      key: `bg-${accent}`,
      label: accent,
      bg: 'bg-background',
      text: colors.text,
    };
  }),
];

const accentColorsContrast = [
  ...accents.map((accent) => {
    const colors = accentToColor(accent);
    return {
      key: `accent-${accent}`,
      label: accent,
      bg: colors.bgContrast,
      text: colors.textContrast,
    };
  }),
];

export function ColorsPage() {
  return (
    <div className="flex flex-col gap-12 px-8 py-4">
      {/* Shadcn Colors */}
      <div className="flex flex-col gap-4">
        <Heading3>Shadcn Colors</Heading3>
        <div className="flex flex-col max-w-sm gap-3">
          {shadcnColors.map(({ bg, text }) => (
            <ColorSwatch
              key={`${bg}-${text}`}
              bg={bg}
              text={text}
              bgLabel={bg}
              textLabel={text}
            />
          ))}
        </div>
      </div>

      {/* Severity Colors */}
      <div className="flex flex-col gap-4">
        <Heading3>Severity Colors</Heading3>
        <div className="flex flex-col max-w-sm gap-3">
          {severityColors.map(({ bg, text }) => (
            <ColorSwatch
              key={`${bg}-${text}`}
              bg={bg}
              text={text}
              bgLabel={bg}
              textLabel={text}
            />
          ))}
        </div>
      </div>

      {/* Severity Colors Contrast */}
      <div className="flex flex-col gap-4">
        <Heading3>Severity Colors Contrast</Heading3>
        <div className="flex flex-col max-w-sm gap-3">
          {severityColorsContrast.map(({ bg, text }) => (
            <ColorSwatch
              key={`${bg}-${text}`}
              bg={bg}
              text={text}
              bgLabel={bg}
              textLabel={text}
            />
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div className="flex flex-col gap-4">
        <Heading3>Accent Colors</Heading3>
        <div className="flex flex-col max-w-sm gap-3">
          {accentColors.map(({ bg, text }) => (
            <ColorSwatch
              key={`${bg}-${text}`}
              bg={bg}
              text={text}
              bgLabel={bg}
              textLabel={text}
            />
          ))}
        </div>
      </div>

      {/* Accent Colors Contrast */}
      <div className="flex flex-col gap-4">
        <Heading3>Accent Colors Contrast</Heading3>
        <div className="flex flex-col max-w-sm gap-3">
          {accentColorsContrast.map(({ bg, text }) => (
            <ColorSwatch
              key={`${bg}-${text}`}
              bg={bg}
              text={text}
              bgLabel={bg}
              textLabel={text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
