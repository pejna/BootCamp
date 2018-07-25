import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NewsDetails } from '../components';
import { getArticle } from '../redux';

class NewsDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation, article } = this.props;
    const { url } = navigation.state.params;

    return (
      <View style={styles.container}>
        <NewsDetails
          onWebArticleOpen={() => {
            navigation.navigate('WebArticle', { url });
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
      const { navigation } = ownProps;
      return getArticle(state, navigation.state.params.url);
    },
  };
}

export default connect(mapStateToProps)(NewsDetailsScreen);
