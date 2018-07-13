import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { ScreenNewsDetails, ScreenNewsList } from './screens';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewsSelected: false,
      article: {},
      articles: [],
    };
    this.handleNewsSelected = this.handleNewsSelected.bind(this);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
  }

  handleNewsSelected(article, articles) {
    this.setState({ article, articles, isNewsSelected: true });
  }

  handleDetailsClose() {
    this.setState({ isNewsSelected: false });
  }

  render() {
    const { isNewsSelected } = this.state;

    if (isNewsSelected) {
      const { article } = this.state;

      return (
        <View style={styles.container}>
          <ScreenNewsDetails
            article={article}
            onDetailsClose={this.handleDetailsClose}
          />
        </View>
      );
    }

    const { articles } = this.state;

    return (
      <View style={styles.container}>
        <ScreenNewsList
          articles={articles}
          onNewsSelected={this.handleNewsSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#ff9966',
    flex: 1,
  },
  loadingIndicator: {
    alignSelf: 'center',
  },
});
