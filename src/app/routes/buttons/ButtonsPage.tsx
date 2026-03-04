import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Example } from '../../../components/example';
import { Button, ButtonVariantEnum } from '../../../components/ui/button';

export function ButtonsPage() {
  return (
    <div className="flex flex-col gap-4 px-8 py-4">
      <Example title="Variants">
        <div className="flex flex-wrap gap-2">
          {Object.values(ButtonVariantEnum).map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      </Example>
      <Example title="Icon Right">
        <div className="flex flex-wrap gap-2">
          {Object.values(ButtonVariantEnum).map((variant) => (
            <Button key={variant} variant={variant}>
              {variant} <ArrowRight />
            </Button>
          ))}
        </div>
      </Example>
      <Example title="Icon Left">
        <div className="flex flex-wrap gap-2">
          {Object.values(ButtonVariantEnum).map((variant) => (
            <Button key={variant} variant={variant}>
              <ArrowLeft /> {variant}
            </Button>
          ))}
        </div>
      </Example>
      <Example title="Icon Only">
        <div className="flex flex-wrap gap-2">
          {Object.values(ButtonVariantEnum).map((variant) => (
            <Button key={variant} variant={variant} size="icon">
              <ArrowRight />
            </Button>
          ))}
        </div>
      </Example>
      <Example title="Sizes">
        <div className="flex flex-wrap gap-2">
          <Button size="xs">xs</Button>
          <Button size="sm">sm</Button>
          <Button size="default">default</Button>
          <Button size="lg">lg</Button>
        </div>
      </Example>
      <Example title="Icon Sizes">
        <div className="flex flex-wrap gap-2">
          <Button size="icon-xs">
            <ArrowRight />
          </Button>
          <Button size="icon-sm">
            <ArrowRight />
          </Button>
          <Button size="icon">
            <ArrowRight />
          </Button>
          <Button size="icon-lg">
            <ArrowRight />
          </Button>
        </div>
      </Example>
    </div>
  );
}
