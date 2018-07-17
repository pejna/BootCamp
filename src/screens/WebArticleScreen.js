import React, { Component } from 'react';
import { WebView, View, StyleSheet } from 'react-native';

export default class WebArticleScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { url } = navigation.state.params;
    return {
      title: url,
    };
  };

  render() {
    const { navigation } = this.props;
    const { url } = navigation.state.params;
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
