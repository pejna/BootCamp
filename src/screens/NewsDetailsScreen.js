import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NewsDetailsBody } from '../components';

export default class NewsDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  constructor(props) {
    super(props);

    this.handleDetailsClose = this.handleDetailsClose.bind(this);
    this.handleWebArticleOpen = this.handleWebArticleOpen.bind(this);

    const { article } = props.navigation.state.params;
    this.state = { article };
  }

  handleDetailsClose() {
    const { onDetailsClose } = this.props;
    onDetailsClose();
  }

  handleWebArticleOpen() {
    const { navigation } = this.props;
    const {
      article: { web_url: url },
    } = this.state;

    navigation.navigate('WebArticle', { url });
  }

  render() {
    const { article } = this.state;

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
