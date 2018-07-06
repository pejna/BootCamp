import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class NewsDetailsHeader extends Component {
  constructor(props) {
    super(props);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  handleBackPress() {
    const { onBackPress } = this.props;
    onBackPress();
  }

  render() {
    return (
      <View>
        <Button onPress={this.handleBackPress} title="Back" color="#FFFFFF" />
        <Text>Details Header</Text>
      </View>
    );
  }
}
