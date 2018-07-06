import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { NewsDetails, NewsList } from './screens';
import fetchNews from './api/news';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewsSelected: false,
      isNewsAvailable: false,
      isLoading: false,
      article: {},
    };
    this.handleNewsSelected = this.handleNewsSelected.bind(this);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    fetchNews(this);
  }

  handleNewsSelected(article) {
    this.setState({ isNewsSelected: true, article });
  }

  handleDetailsClose() {
    this.setState({ isNewsSelected: false });
  }

  handleRefresh() {
    fetchNews(this);
  }

  startLoading() {
    this.setState({
      isLoading: true,
    });
  }

  stopLoading() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { isLoading, isNewsAvailable, isNewsSelected, articles } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            style={styles.loadingIndicator}
            size="large"
            color="#FFFFFF"
          />
        </View>
      );
    }

    if (isNewsAvailable) {
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
            <NewsList
              articles={articles}
              onNewsSelected={this.handleNewsSelected}
              onRefresh={this.handleRefresh}
            />
          )}
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>No news currently available!</Text>
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
