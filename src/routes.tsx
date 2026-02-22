import { RootLayout } from './app/RootLayout';
import { ButtonsPage } from './app/routes/buttons/ButtonsPage';
import { HomePage } from './app/routes/home/HomePage';
import { NotFoundPage } from './app/routes/not-found/NotFoundPage';
import { PostsPage } from './app/routes/posts/PostsPage';
import { mainNavItems } from './config/RouteConfig';

import type { ReactNode } from 'react';
import type { RouteObject } from 'react-router';

const navElementByPath: Record<string, ReactNode> = {
  '/': <HomePage />,
  '/buttons': <ButtonsPage />,
  '/posts': <PostsPage />,
};

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      ...mainNavItems.map((item) => ({
        path: item.path,
        element: navElementByPath[item.path],
      })),
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
