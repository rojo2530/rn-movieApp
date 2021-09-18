import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setstate] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const result = await movieDB.get<MovieFull>(`${movieId}`);

    console.log(result.data)
  };

  useEffect(() => {
    getMovieDetails();
  }, [])

  return {
    state,
  }
};
