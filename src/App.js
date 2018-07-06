import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { NewsDetails, NewsList } from './screens';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewsSelected: false,
      article: {},
    };
    this.handleNewsSelected = this.handleNewsSelected.bind(this);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
  }

  handleNewsSelected(article) {
    this.setState({ article, isNewsSelected: true });
  }

  handleDetailsClose() {
    this.setState({ isNewsSelected: false });
  }

  render() {
    const { isNewsSelected } = this.state;

    const { article } = this.state;
    return (
      <View style={styles.container}>
        {isNewsSelected && (
          <NewsDetails
            article={article}
            onDetailsClose={this.handleDetailsClose}
          />
        )}
        {!isNewsSelected && (
          <NewsList onNewsSelected={this.handleNewsSelected} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#ff9966',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIndicator: {
    alignSelf: 'center',
  },
});
