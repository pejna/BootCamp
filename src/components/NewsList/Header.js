import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class NewsListHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>List Header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#ff9966',
  },
});
