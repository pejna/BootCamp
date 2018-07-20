import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Navigation } from 'react-native-navigation';
import { rootReducer } from '.';
import { registerScreens } from './nativeNavigation';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

registerScreens(store, Provider);

const navigatorStyle = {
  navBarTranslucent: false,
  drawUnderNavBar: true,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true,
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'NewsList',
    title: 'News',
    navigatorStyle,
  },
});
