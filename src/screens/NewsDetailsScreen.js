import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NewsDetails } from '../components';
import { selectArticle } from '../selectors';

class NewsDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation, articles } = this.props;
    const { url } = navigation.state.params;
    console.log(url);
    const article = selectArticle(articles, url);
    console.log(article);

    return (
      <View style={styles.container}>
        <NewsDetails
          onWebArticleOpen={() => {
            navigation.navigate('WebArticle', { url });
          }}
          style={styles.body}
          article={article}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
  headerButtonsContainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = state => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(NewsDetailsScreen);
