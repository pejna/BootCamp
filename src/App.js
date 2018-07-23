import React, { Component } from 'react';
import { View } from 'react-native';
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

class CycleLogProvider extends Component {
  constructor(props) {
    super(props);
    console.log('CycleLogProvider constructor');
  }

  componentWillMount() {
    console.log('CycleLogProvider componentWillMount');
  }

  componentDidMount() {
    console.log('CycleLogProvider componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('CycleLogProvider componentWillReceiveProps');
  }

  render() {
    const { children } = this.props;
    return <View>{children} </View>;
  }
}

const testSingleton = {
  func: () => {
    console.log('Called func');
  },
};

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
    passProps: {
      testSingleton,
    },
  },
});
