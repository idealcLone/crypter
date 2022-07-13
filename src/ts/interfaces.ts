import React from 'react';

export interface IRoute {
  name: string;
  path: string;
  component: React.ReactNode;
  protected?: boolean;
}

export interface IBid {
  id: number;
  img: string;
  name: string;
  price: number;
  stockCount: number;
  highestBid: number;
}
