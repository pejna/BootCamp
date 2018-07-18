import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NewsDetailsBody } from '../components';
import { selectArticle } from '../selectors';

export default class NewsDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  constructor(props) {
    super(props);

    this.handleWebArticleOpen = this.handleWebArticleOpen.bind(this);
  }

  handleWebArticleOpen() {
    const { navigation } = this.props;
    const { url } = navigation.state.params;

    navigation.navigate('WebArticle', { url });
  }

  render() {
    const { navigation } = this.props;
    const article = selectArticle(navigation.state.params.url);

    return (
      <View style={styles.container}>
        <NewsDetailsBody
          onWebArticleOpen={this.handleWebArticleOpen}
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
