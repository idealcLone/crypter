import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './consts/routes';

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="divider" />
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};
