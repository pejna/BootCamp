import React, { Component } from 'react';
import { View } from 'react-native';
import NewsDetailsHeader from '../components/NewsDetails/Header';
import NewsDetailsBody from '../components/NewsDetails/Body';

export default class NewsDetails extends Component {
  render() {
    return (
      <View>
        <NewsDetailsHeader />
        <NewsDetailsBody />
      </View>
    );
  }
}
