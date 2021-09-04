import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDbNowPlaying } from '../interfaces/movieInterface';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB
      .get<MovieDbNowPlaying>('/now_playing')
      .then(res => console.log(res.data.results[0].title));
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
