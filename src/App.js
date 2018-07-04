import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NewsDetails from './screens/NewsDetails';
import NewsList from './screens/NewsList';

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
        {this.state.isNewsSelected && <NewsDetails />}
        {!this.state.isNewsSelected && <NewsList />}
      </View>
    );
  }
}

const styles = StyleSheet.create({

})