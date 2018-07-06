import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemPress = this.handleItemPress.bind(this);
  }

  handleItemPress() {
    const { newsItem, onPress } = this.props;
    const { _id: id } = newsItem;
    onPress(id);
  }

  render() {
    const { newsItem } = this.props;
    const { headline, source, snippet } = newsItem;

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleItemPress}>
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
