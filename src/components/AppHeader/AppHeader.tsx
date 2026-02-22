import { AtomIcon } from 'lucide-react';

import { ModeToggle } from './ModeToggle';
import { Navigation } from './Navigation';
import { siteConfig } from '../../config/SiteConfig';
import { SidebarTrigger } from '../ui/sidebar';

export function AppHeader() {
  // `header-height` is set in the RootLayout
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center px-4 h-(--header-height) border-b border-border bg-card">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-7 rounded-lg bg-primary text-primary-foreground">
            <AtomIcon className="size-5" />
          </div>
          <span className="text-base font-medium tracking-wide">
            {siteConfig.name}
          </span>
        </div>
      </div>

      {/* Center Section */}
      <Navigation />

      {/* Right Section */}
      <div className="flex items-center justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
