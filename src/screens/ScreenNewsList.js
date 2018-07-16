import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { _ } from 'lodash';
import { fetchNews } from '../api';
import { NewsListHeader, NewsListBody } from '../components';

export default class ScreenNewsList extends Component {
  constructor(props) {
    super(props);

    this.refresh = this.refresh.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.handleCategoriesPress = this.handleCategoriesPress.bind(this);
    this.handleFavoritesPress = this.handleFavoritesPress.bind(this);
    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.loadMore = this.loadMore.bind(this);

    const { articles } = props;

    this.state = {
      isRefreshing: false,
      articles,
      page: 0,
      hasArticles: !_.isEmpty(articles),
    };
  }

  componentDidMount() {
    this.refresh();
  }

  async refresh() {
    const { isRefreshing } = this.state;

    if (isRefreshing) {
      return;
    }

    const { hasArticles } = this.state;

    if (hasArticles) {
      this.setState({ hasArticles: false });
      return;
    }

    this.startLoading();

    const page = 0;

    try {
      const articles = await fetchNews(page);
      this.setState({ articles, page });
    } catch (e) {
      console.error(e);
    }

    this.stopLoading();
  }

  async loadMore() {
    const { isRefreshing } = this.state;

    if (isRefreshing) {
      return;
    }

    this.startLoading();

    const { page } = this.state;
    const { articles } = this.state;

    try {
      const nextPage = page + 1;
      const newArticles = await fetchNews(nextPage);
      this.setState({
        articles: [...articles, ...newArticles],
        page: nextPage,
      });
    } catch (e) {
      console.error(e);
    }

    this.stopLoading();
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

  handleNewsPressed(article) {
    const { navigation } = this.props;

    navigation.push('NewsDetails', { article });
  }

  render() {
    const { articles, isRefreshing } = this.state;
    return (
      <View style={styles.container}>
        <NewsListHeader
          style={styles.header}
          onCategoriesPress={this.handleCategoriesPress}
          onFavoritesPress={this.handleFavoritesPress}
        />
        <NewsListBody
          style={styles.body}
          articles={articles}
          onRefresh={this.refresh}
          onLoadMore={this.loadMore}
          isRefreshing={isRefreshing}
          onNewsPressed={this.handleNewsPressed}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#ff9966',
  },
  body: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
});
