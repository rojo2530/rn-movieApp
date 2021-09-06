import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDbMoviesResponse } from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesActual, setMoviesActual] = useState<Movie[]>([]);
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDbMoviesResponse>(
      '/now_playing',
    );
    const resPopular = await movieDB.get<MovieDbMoviesResponse>('/popular');

    await movieDB.get<MovieDbMoviesResponse>('/top_rated');
    await movieDB.get<MovieDbMoviesResponse>('/upcoming');
    setMoviesActual(resNowPlaying.data.results);
    setMoviesPopular(resPopular.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    moviesActual,
    moviesPopular,
    isLoading,
  };
};
