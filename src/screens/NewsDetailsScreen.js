import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NewsDetails } from '../components';
import { getArticle } from '../redux';

class NewsDetailsScreen extends Component {
  static navigatorStyle = {
    title: 'Details',
  };

  render() {
    const { navigator, article, url } = this.props;
    return (
      <View style={styles.container}>
        <NewsDetails
          onWebArticleOpen={() => {
            navigator.push({
              screen: 'WebArticle',
              passProps: { url },
              title: url,
            });
          }}
          style={styles.body}
          article={article()}
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

function mapStateToProps(state, ownProps) {
  return {
    article: () => {
      const { url } = ownProps;
      return getArticle(state, url);
    },
  };
}

export default connect(mapStateToProps)(NewsDetailsScreen);
