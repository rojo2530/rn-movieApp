import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesActual, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  // const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="red" size={32} />
      </View>
    );
  }

  console.log(moviesActual.length);

  return (
    <View style={{ marginTop: top + 20 }}>
      <View
        style={{
          height: 440,
        }}>
        <Carousel
          data={moviesActual}
          renderItem={({ item }) => <MoviePoster movie={item} />}
          sliderWidth={windowWith}
          itemWidth={300}
          // firstItem={17}
          // onSnapToItem={index => setActiveIndex(index)}
        />
      </View>

      {/* <MoviePoster movie={moviesActual[0]} /> */}
    </View>
  );
};
