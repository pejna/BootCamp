import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchNews } from '../api';
import { NewsListHeader, NewsListBody } from '../components';

export default class NewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: true,
      articles: [],
      page: 0,
    };

    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.refresh = this.refresh.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
    this.handleCategoriesPress = this.handleCategoriesPress.bind(this);
    this.handleFavoritesPress = this.handleFavoritesPress.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  async refresh() {
    const { page } = this.state;
    this.startLoading();
    const articles = await fetchNews(page);
    this.setState({ articles });
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
