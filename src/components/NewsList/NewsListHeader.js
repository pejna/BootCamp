import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewsListHeader extends Component {
  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <Text>List Header</Text>
      </View>
    );
  }
}
