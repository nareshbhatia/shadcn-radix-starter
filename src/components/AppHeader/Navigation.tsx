import { NavLink } from 'react-router';

import { mainNavItems } from '../../config/RouteConfig';
import { cn } from '../../utils/cn';

export function Navigation() {
  return (
    <nav className="flex items-center gap-4 text-sm lg:gap-6">
      {mainNavItems.map((navItem) => (
        <NavLink
          key={navItem.path}
          to={navItem.path}
          className={({ isActive }) =>
            cn(
              'transition-colors hover:text-foreground',
              isActive
                ? 'font-medium text-foreground'
                : 'text-muted-foreground',
            )
          }
        >
          {navItem.title}
        </NavLink>
      ))}
    </nav>
  );
}
