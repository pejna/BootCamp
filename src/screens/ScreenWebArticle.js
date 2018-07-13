import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';
import { WebArticleHeader } from '../components/WebArticle';

export default class ScreenWebArticle extends Component {
  render() {
    const { url, onBackPress } = this.props;

    return (
      <View style={styles.container}>
        <WebArticleHeader onBackPress={onBackPress} />
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
