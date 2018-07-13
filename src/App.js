import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { ScreenNewsDetails, ScreenNewsList, ScreenWebArticle } from './screens';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showScreenNewsList: true,
      showScreenNewsDetails: false,
      showScreenWebArticle: false,
      article: {},
      articles: [],
    };
    this.handleNewsSelected = this.handleNewsSelected.bind(this);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
    this.handleOpenWebArticle = this.handleOpenWebArticle.bind(this);
    this.handleWebArticleClose = this.handleWebArticleClose.bind(this);
  }

  handleNewsSelected(article, articles) {
    this.setState({
      article,
      articles,
      showScreenNewsDetails: true,
      showScreenNewsList: false,
    });
  }

  handleDetailsClose() {
    this.setState({ showScreenNewsDetails: false, showScreenNewsList: true });
  }

  handleWebArticleClose() {
    this.setState({ showScreenNewsDetails: true, showScreenWebArticle: false });
  }

  handleOpenWebArticle() {
    this.setState({
      showScreenNewsDetails: false,
      showScreenWebArticle: true,
    });
  }

  render() {
    const {
      showScreenNewsDetails,
      showScreenNewsList,
      showScreenWebArticle,
    } = this.state;

    if (showScreenNewsDetails) {
      const { article } = this.state;

      return (
        <View style={styles.container}>
          <ScreenNewsDetails
            article={article}
            onOpenWebArticle={this.handleOpenWebArticle}
            onDetailsClose={this.handleDetailsClose}
          />
        </View>
      );
    }

    if (showScreenNewsList) {
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

    if (showScreenWebArticle) {
      const { article } = this.state;

      return (
        <View style={styles.container}>
          <ScreenWebArticle
            onBackPress={this.handleWebArticleClose}
            url={article.web_url}
          />
        </View>
      );
    }
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
