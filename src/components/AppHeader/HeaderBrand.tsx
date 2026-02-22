import { AtomIcon } from 'lucide-react';
import { Link } from 'react-router';

import { siteConfig } from '../../config/SiteConfig';
import { Button } from '../ui/button';

export function HeaderBrand() {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon" asChild>
        <Link to="/">
          <AtomIcon />
        </Link>
      </Button>
      <span className="text-base font-medium tracking-wide">
        {siteConfig.name}
      </span>
    </div>
  );
}
