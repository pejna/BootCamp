import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  NewsListScreen,
  NewsDetailsScreen,
  WebArticleScreen,
  PlaceholderModalScreen,
} from './screens';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const MainStack = createStackNavigator(
  {
    NewsList: NewsListScreen,
    NewsDetails: NewsDetailsScreen,
    WebArticle: WebArticleScreen,
  },
  {
    initialRouteName: 'NewsList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ff9966',
      },
      headerTintColor: '#FFFFFF',
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    CategoriesModal: PlaceholderModalScreen,
    FavoritesModal: PlaceholderModalScreen,
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
);
