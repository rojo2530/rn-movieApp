import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get('/now_playing').then(res => console.log(res.data));
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
