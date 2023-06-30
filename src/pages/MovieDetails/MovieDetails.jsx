import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { BackContainer, MovieDetailsComponent } from './MovieDetails.styled';

function MoviesDetails() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const { movieId } = useParams();
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMoviesData = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieDetails(movieId);
        setMovieData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, [movieId]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movieData !== null && (
        <>
          <BackContainer>
            <NavLink to={backLocation.current}>Go Back</NavLink>
          </BackContainer>
          <MovieDetailsComponent>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
            />
            <div>
              <h1>{movieData.title}</h1>
              <h2>User Score</h2>
              <p>{movieData.vote_average}</p>
              <h2>Overview</h2>
              <p>{movieData.overview}</p>
              <h2>Genres</h2>
              {movieData.genres ? (
                <ul>
                  {movieData.genres.map(genre => {
                    return (
                      <li key={genre.id}>
                        <span>{genre.name}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <span>No information</span>
              )}
            </div>
          </MovieDetailsComponent>
        </>
      )}
      <div>
        <ul>
          <li>
            <Link to="cast" state={backLocation}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLocation}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default MoviesDetails;
