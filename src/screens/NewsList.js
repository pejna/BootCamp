import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { NewsListItem } from '../components';
import { fetchNews } from '../api';
import { NewsListHeader } from '../components/NewsList';

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: true,
      isNewsAvailable: false,
      articles: {},
    };

    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleFetchedNews = this.handleFetchedNews.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.handleCategoriesPress = this.handleCategoriesPress.bind(this);
    this.handleFavoritesPress = this.handleFavoritesPress.bind(this);
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

  handleCategoriesPress() {}

  handleFavoritesPress() {}

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
        <NewsListHeader
          style={(styles.container, styles.header)}
          onCategoriesPress={this.handleCategoriesPress}
          onFavoritesPress={this.handleFavoritesPress}
        />

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
    flex: 10,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  header: {
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#ff9966',
  },
});
