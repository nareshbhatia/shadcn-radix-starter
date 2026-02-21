import { RootLayout } from './app/RootLayout';
import { ButtonsPage } from './app/routes/buttons/ButtonsPage';
import { HomePage } from './app/routes/home/HomePage';
import { NotFoundPage } from './app/routes/not-found/NotFoundPage';
import { PostsPage } from './app/routes/posts/PostsPage';
import { mainNavItems } from './config/RouteConfig';

import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: mainNavItems.get('buttons')!.path,
        element: <ButtonsPage />,
      },
      {
        path: mainNavItems.get('posts')!.path,
        element: <PostsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
