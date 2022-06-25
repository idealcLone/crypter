import React from 'react';
import { Navbar } from './layout/Navbar';
import { Header } from './layout/Header';
import { Auction } from './layout/Auction';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="divider" />
      <Header />
      <Auction />
    </>
  );
};
