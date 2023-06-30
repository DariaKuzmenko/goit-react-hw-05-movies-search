import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/API';
import { CastList } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesCast = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieCast(movieId);
        setCast(result.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesCast();
  }, [movieId]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {cast && cast.lenghth === 0 && <p>No cast found</p>}
      {cast && (
        <CastList>
          {cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </li>
            );
          })}
        </CastList>
      )}
      <div>Cost</div>
    </>
  );
}

export default Cast;
