export enum RoutePathEnum {
  Home = 'home',
  Buttons = 'buttons',
}

export type RoutePath = `${RoutePathEnum}`;

export interface NavItem {
  path: string;
  title: string;
}

export const mainNavItems = new Map<RoutePath, NavItem>([
  ['home', { path: '/', title: 'Home' }],
  ['buttons', { path: '/buttons', title: 'Buttons' }],
]);
