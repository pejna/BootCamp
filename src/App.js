import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class X extends Component {
  render() {
    return (
      <Text>Text</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <X/>
      </View>
    );
  }
}