import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDbNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesActual, setMoviesActual] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await movieDB.get<MovieDbNowPlaying>('/now_playing');
    setMoviesActual(res.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);
  
  return {
    moviesActual,
    isLoading
  };
};
