import { RootLayout } from './app/RootLayout';
import { ButtonsPage } from './app/routes/buttons/ButtonsPage';
import { ColorsPage } from './app/routes/colors/ColorsPage';
import { HomePage } from './app/routes/home/HomePage';
import { NotFoundPage } from './app/routes/not-found/NotFoundPage';
import { PostsPage } from './app/routes/posts/PostsPage';
import { TypographyPage } from './app/routes/typography/TypographyPage';
import { mainNavItems } from './config/RouteConfig';

import type { ReactNode } from 'react';
import type { RouteObject } from 'react-router';

const navElementByPath: Record<string, ReactNode> = {
  '/': <HomePage />,
  '/colors': <ColorsPage />,
  '/typography': <TypographyPage />,
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
