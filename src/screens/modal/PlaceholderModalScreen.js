import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class PlaceholderModalScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>Coming soon!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
