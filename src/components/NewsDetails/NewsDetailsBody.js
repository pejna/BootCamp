import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';

export default class NewsDetailsBody extends Component {
  render() {
    const { article } = this.props;
    const { headline, source, snippet, pub_date: pubDate, keywords } = article;
    const hasKeywords = keywords.length > 0;
    const date = moment(pubDate).format('MMMM Do YY');
    const refreshing = true;

    return (
      <View>
        <Text>{headline.main}</Text>
        <Text>{snippet}</Text>
        <Text>{source}</Text>
        <Text>{date}</Text>
        {hasKeywords && (
          <FlatList
            refreshing={refreshing}
            data={keywords}
            keyExtractor={item => item.rank}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.keywordText}>{item.value}</Text>
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keywordContainer: {
    borderWidth: 1,
    backgroundColor: '#FFEAD9',
    flex: 1,
  },
  keywordText: {
    flex: 1,
  },
});
