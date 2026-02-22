import { Home, MousePointerClick, FileText } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  path: string;
  title: string;
  icon: LucideIcon;
}

export const mainNavItems: NavItem[] = [
  { path: '/', title: 'Home', icon: Home },
  { path: '/buttons', title: 'Buttons', icon: MousePointerClick },
  { path: '/posts', title: 'Posts', icon: FileText },
];
