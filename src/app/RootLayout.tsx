import { Outlet } from 'react-router';

import { AppHeader } from '../components/AppHeader/AppHeader';

/**
 * Root layout component that wraps the entire application.
 * - The application takes up the full height of the viewport.
 * - The app header is fixed height.
 * - The main content area takes up the remaining space and is scrollable.
 * - The routes are rendered in the main content area.
 *
 * |-------------------|
 * |     AppHeader     |
 * |-------------------|
 * | Main Content Area |
 * |     <Outlet>      |
 * |-------------------|
 */
export function RootLayout() {
  return (
    <div className="flex flex-col h-screen relative">
      <AppHeader />
      <main className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
