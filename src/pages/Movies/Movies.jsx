import MovieListItem from 'components/MovieListItem/MovieListItem';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/API';
import { SearchFormMovieList } from './Movies.styled';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const result = await getSearchMovie(query);
        setMovies(result.results);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmitForm = value => {
    if (value !== query) setMovies([]);

    if (value === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmitForm} />
      {isLoading && <p>Loading...</p>}
      {movies && movies.length === 0 && query !== '' && (
        <p>We don't have such films. Try to find something else!</p>
      )}
      {movies && (
        <div>
          <SearchFormMovieList>
            {movies.map(movie => (
              <MovieListItem movie={movie} key={movie.id} />
            ))}
          </SearchFormMovieList>
        </div>
      )}
    </>
  );
}

export default Movies;
