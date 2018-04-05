// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, YellowBox } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated'
]);
// Create a component
const App = () => (
  <View>
    <Header headerText={'Autzu'} />
    <AlbumList />
  </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
