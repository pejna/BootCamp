import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchNews } from '../api';
import { NewsListHeader, NewsListBody } from '../components';

export default class ScreenNewsList extends Component {
  constructor(props) {
    super(props);
    const { articles: art } = props;

    this.state = {
      isRefreshing: false,
      articles: art,
      page: 0,
      hasArticles: art.length > 0,
    };

    this.refresh = this.refresh.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.handleCategoriesPress = this.handleCategoriesPress.bind(this);
    this.handleFavoritesPress = this.handleFavoritesPress.bind(this);
    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  async refresh() {
    const { isRefreshing } = this.state;
    if (isRefreshing) {
      console.log('prevented refreshing');
      return;
    }
    const { hasArticles } = this.state;
    if (hasArticles) {
      this.setState({ hasArticles: false });
      return;
    }

    this.startLoading();
    console.log('refreshing');

    const page = 0;

    try {
      const articles = await fetchNews(page);
      this.setState({ articles, page });
    } catch (e) {
      // intentionally empty
    }

    this.stopLoading();
  }

  async loadMore() {
    const { isRefreshing } = this.state;
    if (isRefreshing) {
      console.log('prevented loading more');
      return;
    }
    this.startLoading();

    let { page } = this.state;
    const { articles } = this.state;
    page += 1;
    console.log(`loading more at ${page + 1}`);

    try {
      const newArticles = await fetchNews(page);
      this.setState({ articles: [...articles, ...newArticles], page });
    } catch (e) {
      // intentionally empty
    }

    this.stopLoading();
  }

  startLoading() {
    this.setState({
      isRefreshing: true,
    });
    console.log('start loading');
  }

  stopLoading() {
    this.setState({
      isRefreshing: false,
    });
    console.log('stop loading');
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
