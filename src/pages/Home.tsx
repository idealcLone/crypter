import React from 'react';
import { Auction } from '../components/home/Auction';
import { Feed } from '../components/home/Feed';
import { TopCreators } from '../components/home/TopCreators';
import { HotBid } from '../components/home/HotBid';
import { HotCollections } from '../components/home/HotCollections';
import { Discover } from '../components/home/Discover';
import { CTA } from '../components/home/CTA';

export const Home: React.FC = () => {
  return (
    <main>
      <Auction />
      <Feed />
      <TopCreators />
      <HotBid />
      <HotCollections />
      <Discover />
      <CTA />
    </main>
  );
};
