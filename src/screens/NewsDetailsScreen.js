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
    this.handleOpenWebArticle = this.handleOpenWebArticle.bind(this);

    const { article } = props.navigation.state.params;
    this.state = { article };
  }

  handleDetailsClose() {
    const { onDetailsClose } = this.props;
    onDetailsClose();
  }

  handleOpenWebArticle() {
    const { navigation } = this.props;
    const { article } = this.state;

    navigation.navigate('WebArticle', { url: article.web_url });
  }

  render() {
    const { article } = this.state;

    return (
      <View style={styles.container}>
        <NewsDetailsBody
          onOpenWebArticle={this.handleOpenWebArticle}
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
