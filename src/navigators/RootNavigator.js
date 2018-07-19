import { createStackNavigator } from 'react-navigation';
import { MainNavigator } from './MainNavigator';
import { PlaceholderModalScreen } from '../screens';

export const RootNavigator = createStackNavigator(
  {
    Main: MainNavigator,
    CategoriesModal: PlaceholderModalScreen,
    FavoritesModal: PlaceholderModalScreen,
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  }
);
