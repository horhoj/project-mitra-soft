import { Page404 } from '@pages/Error404Page';
import { FC } from 'react';
import { PostsPage } from '@pages/PostsPage';
import { AboutPage } from '@pages/AboutPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['posts', 'about', 'error404'] as const;

export type RouteNameList = (typeof routeNameList)[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  posts: {
    path: '/posts',
    component: PostsPage,
  },
  about: { path: '/about', component: AboutPage },
  error404: {
    path: '*',
    component: Page404,
  },
};
