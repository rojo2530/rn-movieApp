import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWith } = Dimensions.get('window');

export const HomeScreen = () => {
  const { moviesActual,moviesPopular, isLoading } = useMovies();
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
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel Movies */}
        <View style={{ height: 440 }}>
          <Carousel
            data={moviesActual}
            renderItem={({ item }) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            // firstItem={17}
            // onSnapToItem={index => setActiveIndex(index)}
          />
        </View>
        {/* Movies on Cinema */}
        <HorizontalSlider movies={moviesPopular} title="on Cinema" />
        {/* <HorizontalSlider movies={moviesActual} /> */}

        {/* <MoviePoster movie={moviesActual[0]} /> */}
      </View>
    </ScrollView>
  );
};
