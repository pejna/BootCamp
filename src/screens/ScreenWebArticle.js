import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';
import { WebArticleHeader } from '../components';

export default class ScreenWebArticle extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;

    thi.state = { article: navigation.state.params.article };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <WebArticleHeader onBackPress={navigation.goBack()} />
        <WebView style={styles.webView} source={{ uri: `${url}` }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webView: {
    flex: 1,
  },
});
