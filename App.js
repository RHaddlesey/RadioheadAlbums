import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => {
  return (
  <View style={{ flex: 1 }}>
    <Header headerDefaultText={"Radiohead Albums"} />
    <AlbumList />
  </View>
  );
};

export default App;
