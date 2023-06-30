import MovieListItem from 'components/MovieListItem/MovieListItem';
import React, { useEffect, useState } from 'react';
import { getTrendMovies } from 'services/API';
import { MovieContainer, MovieList } from './Home.styled';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const result = await getTrendMovies();
        setMovies(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <>
      <MovieContainer>
        <h1>Trending Movies</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <MovieList>
          {Array.isArray(movies) &&
            movies.length > 0 &&
            movies.map(movie => <MovieListItem movie={movie} key={movie.id} />)}
        </MovieList>
      </MovieContainer>
    </>
  );
}

export default Home;
