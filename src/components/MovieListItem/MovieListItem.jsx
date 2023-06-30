import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem, Poster } from './MovieListItem.styled';

const MovieListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <MovieItem key={movie.id}>
      <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <div>
          <Poster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://placehold.co/400x600?text=${
                    movie.title ?? movie.name
                  }&font=roboto`
            }
            alt={movie.title}
          />
        </div>
      </NavLink>
    </MovieItem>
  );
};

export default MovieListItem;
