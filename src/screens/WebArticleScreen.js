import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

export default class WebArticleScreen extends Component {
  render() {
    const { url } = this.props;
    return (
      <View style={styles.container}>
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
