import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
