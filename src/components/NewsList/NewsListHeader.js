import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class NewsListHeader extends Component {
  constructor(props) {
    super(props);
    this.handleCategoriesPress = this.handleCategoriesPress.bind(this);
    this.handleFavoritesPress = this.handleFavoritesPress.bind(this);
  }

  handleCategoriesPress() {
    const { onCategoriesPress } = this.props;
    onCategoriesPress();
  }

  handleFavoritesPress() {
    const { onFavoritesPress } = this.props;
    onFavoritesPress();
  }

  render() {
    const { style } = this.props;

    return (
      <View style={(style, styles.container)}>
        <Button title="Categories" onPress={this.handleCategoriesPress} />
        <Button title="Favorites" onPress={this.handleFavoritesPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
