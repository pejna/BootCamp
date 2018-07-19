import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class PlaceholderModalScreen extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Coming soon!</Text>
        <Button onPress={this.handlePress} title="Dismiss" />
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
  text: {
    fontSize: 30,
  },
});
