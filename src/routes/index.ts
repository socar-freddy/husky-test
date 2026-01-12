import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import type { RouteObject } from 'react-router';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CounterPage = lazy(() => import('@/pages/CounterPage'));

const routes: RouteObject[] = [
  { path: '/', Component: HomePage },
  { path: '/counter', Component: CounterPage },
];

export const router = createBrowserRouter(routes);
