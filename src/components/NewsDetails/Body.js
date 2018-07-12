import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import moment from 'moment';

export default class NewsDetailsBody extends Component {
  render() {
    const { article } = this.props;
    const { headline, source, snippet, pub_date: pubDate, keywords } = article;
    const hasKeywords = keywords.length > 0 && false;
    const date = moment(pubDate).format('MMMM Do YY');
    return (
      <View>
        <Text>{headline.main}</Text>
        <Text>{snippet}</Text>
        <Text>{source}</Text>
        <Text>{date}</Text>
        {hasKeywords && <FlatList data={keywords} keyExtractor={item} />}
      </View>
    );
  }
}
