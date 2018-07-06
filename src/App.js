import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  ActivityIndicator,
} from 'react-native';
import NewsDetails from './screens/NewsDetails';
import NewsList from './screens/NewsList';

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
  }

  componentDidMount() {
    this.fetchNews();
  }

  handleNewsSelected(article) {
    this.setState({ isNewsSelected: true, article });
  }

  handleDetailsClose() {
    this.setState({ isNewsSelected: false });
  }

  async fetchNews() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c'
      );
      const responseJson = await response.json();
      this.parseArticles(responseJson);
    } catch (error) {
      this.setState({ isLoading: false });
    }
  }

  parseArticles(responseJson) {
    if (responseJson.status === 'OK') {
      this.setState({
        isNewsAvailable: true,
        articles: responseJson.response.docs,
        isLoading: false,
      });
    } else {
      this.setState({ isNewsAvailable: false, isLoading: false });
    }
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
