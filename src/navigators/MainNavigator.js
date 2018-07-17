import { createStackNavigator } from 'react-navigation';
import {
  NewsListScreen,
  NewsDetailsScreen,
  WebArticleScreen,
} from '../screens';

export const MainNavigator = createStackNavigator(
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
