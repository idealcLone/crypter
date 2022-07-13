import React from 'react';
import { IRoute } from '../ts/interfaces';
import { Home } from '../pages/Home';

export const ROUTES: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
];
