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
    };
  }

  render() {
    if (this.state.isLoading) {
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
    if (this.state.isNewsAvailable) {
      return (
        <View style={styles.container}>
          {this.state.isNewsSelected && <NewsDetails />}
          {!this.state.isNewsSelected && (
            <NewsList articles={this.state.articles} />
          )}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>No news currently available!</Text>
        </View>
      );
    }
  }

  componentDidMount() {
    this.fetchNews();
  }

  async fetchNews() {
    try {
      this.setState({ isLoading: true });
      let response = await fetch(
        'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=718c5c8e6f1e4af3afcc4611eb5d690c'
      );
      let responseJson = await response.json();
      this.parseArticles(responseJson);
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
    }
  }

  parseArticles(responseJson) {
    console.log(responseJson);

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
