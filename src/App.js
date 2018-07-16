import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { NewsListScreen, NewsDetailsScreen, WebArticleScreen } from './screens';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    NewsList: NewsListScreen,
    NewsDetails: NewsDetailsScreen,
    WebArticle: WebArticleScreen,
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
