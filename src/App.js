import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ScreenNewsDetails, ScreenNewsList, ScreenWebArticle } from './screens';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    NewsList: ScreenNewsList,
    NewsDetails: ScreenNewsDetails,
    WebArticle: ScreenWebArticle,
  },
  {
    initialRouteName: 'NewsList',
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#ff9966',
    flex: 1,
  },
  loadingIndicator: {
    alignSelf: 'center',
  },
});
