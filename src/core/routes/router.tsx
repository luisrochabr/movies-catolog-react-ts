import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../../pages/Home'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
