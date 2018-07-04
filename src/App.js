import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScreenNewsList } from './screens/NewsList';
import { ScreenNewsDetails } from './screens/NewsDetails';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewsSelected: false
    };
  }

  render() {
    return (
      <View>
        {!isNewsSelected && <ScreenNewsList articles={state.articles}/>}
        {isNewsSelected && <ScreenNewsDetails />}
      </View>
    );
  }
}

const styles = StyleSheet.create({

});