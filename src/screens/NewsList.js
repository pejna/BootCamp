import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { NewsListItem } from '../components';
import { fetchNews } from '../api';

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      isNewsAvailable: false,
      articles: {},
    };

    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleFetchedNews = this.handleFetchedNews.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }

  componentDidMount() {
    this.refresh(this);
  }

  refresh() {
    this.startLoading();
    fetchNews(this.handleFetchedNews);
  }

  handleFetchedNews(news) {
    this.setState({ articles: news });
    this.setState({ isNewsAvailable: true });

    this.stopLoading();
  }

  handleNewsPressed(article) {
    const { onNewsSelected } = this.props;
    onNewsSelected(article);
  }

  startLoading() {
    this.setState({
      isRefreshing: true,
    });
  }

  stopLoading() {
    this.setState({
      isRefreshing: false,
    });
  }

  render() {
    const { articles } = this.state;
    const { isRefreshing, isNewsAvailable } = this.state;

    if (!isNewsAvailable) {
      return (
        <View style={styles.container}>
          <Text>No news currently available!</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={(styles.content, styles.header)}>
          <Text>List Header</Text>
        </View>

        <FlatList
          style={[styles.content, styles.newsList]}
          data={articles}
          keyExtractor={item => item._id}
          onRefresh={this.refresh}
          refreshing={isRefreshing}
          renderItem={({ item }) => (
            <NewsListItem newsItem={item} onPress={this.handleNewsPressed} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {},
  newsList: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  header: {
    padding: 10,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#ff9966',
  },
});
