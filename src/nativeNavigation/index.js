import { Navigation } from 'react-native-navigation';
import {
  NewsListScreen,
  NewsDetailsScreen,
  WebArticleScreen,
  PlaceholderModalScreen,
} from '../screens';

export function registerScreens(store, Provider) {
  console.log('register screens');
  Navigation.registerComponent(
    'NewsList',
    () => {
      console.log('NewsList');
      return NewsListScreen;
    },
    store,
    Provider
  );
  Navigation.registerComponent(
    'NewsDetails',
    () => {
      console.log('NewsDetails');
      return NewsDetailsScreen;
    },
    store,
    Provider
  );
  Navigation.registerComponent(
    'WebArticle',
    () => WebArticleScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    'CategoriesModal',
    () => PlaceholderModalScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    'FavoritesModal',
    () => PlaceholderModalScreen,
    store,
    Provider
  );
}
