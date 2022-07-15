import React from 'react';
import { IRoute } from '../ts/interfaces';
import { Home } from '../pages/Home';
import { UploadItem } from '../pages/UploadItem';
import { CreateCollectible } from '../pages/CreateCollectible';

export const ROUTES: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'Upload item',
    path: '/upload',
    component: <UploadItem />,
  },
  {
    name: 'Create Single Collectible',
    path: '/create/single',
    component: <CreateCollectible />,
  },
];
