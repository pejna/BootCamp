import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class NewsListItem extends Component {
  onItemPress() {}

  render() {
    const { newsItem } = this.props;
    const { headline, source, snippet } = newsItem;

    return (
      <TouchableOpacity style={styles.container} onPress={this.onItemPress}>
        <Text>{headline.main}</Text>
        <Text>{source}</Text>
        <Text>{snippet}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
});
