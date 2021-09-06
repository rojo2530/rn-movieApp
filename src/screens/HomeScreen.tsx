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
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel Movies */}
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
        {/* Movies popular */}
        <View style={{ backgroundColor: 'red', height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
          <FlatList
            data={moviesActual}
            renderItem={({ item }) => (
              <MoviePoster movie={item} height={200} width={140} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* <MoviePoster movie={moviesActual[0]} /> */}
      </View>
    </ScrollView>
  );
};
