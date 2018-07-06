import React, { Component } from 'react';
import { View } from 'react-native';
import NewsDetailsHeader from '../components/NewsDetails/Header';
import NewsDetailsBody from '../components/NewsDetails/Body';

export default class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
  }

  handleDetailsClose() {
    const { onDetailsClose } = this.props;
    onDetailsClose();
  }

  render() {
    return (
      <View>
        <NewsDetailsHeader onBackPress={this.handleDetailsClose} />
        <NewsDetailsBody />
      </View>
    );
  }
}
