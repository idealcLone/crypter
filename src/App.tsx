import React from 'react';
import { Navbar } from './layout/Navbar';
import { Header } from './layout/Header';
import { Auction } from './layout/Auction';
import { Feed } from './layout/Feed';
import { TopCreators } from './layout/TopCreators';
import { HotBid } from './layout/HotBid';
import { HotCollections } from './layout/HotCollections';
import { Discover } from './layout/Discover';
import { CTA } from './layout/CTA';
import { Footer } from './layout/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="divider" />
      <Header />
      <Auction />
      <Feed />
      <TopCreators />
      <HotBid />
      <HotCollections />
      <Discover />
      <CTA />
      <Footer />
    </>
  );
};
