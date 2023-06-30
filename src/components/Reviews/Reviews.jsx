import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieReviews(movieId);
        setReviews(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {reviews && reviews.length === 0 && <p>No reviews found</p>}
      {reviews && reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;
