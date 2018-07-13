import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import { WebArticleHeader } from '../components/WebArticle';

export default class ScreenWebArticle extends Component {
  render() {
    const { url, onBackPress } = this.props;

    return (
      <View>
        <WebArticleHeader onBackPress={onBackPress} />
        <WebView source={{ uri: `${url}` }} />
      </View>
    );
  }
}
