import { Link, useLocation } from 'react-router';

import { mainNavItems } from '../../config/RouteConfig';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';

export function AppSidebar() {
  const location = useLocation();

  // `header-height` is set in the RootLayout
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map(({ path, title, icon: Icon }) => (
                <SidebarMenuItem key={path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === path}
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground hover:bg-accent hover:text-foreground"
                  >
                    <Link to={path}>
                      <Icon />
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
