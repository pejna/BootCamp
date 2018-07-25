import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

function KeywordList({ keywords }) {
  const hasKeywords = keywords.length > 0;

  if (!hasKeywords) {
    return <View />;
  }

  return (
    <View>
      <Text style={styles.keywordLabel}>Keywords: </Text>
      <Text style={styles.keywordListContainer}>
        {_.map(keywords, keyword => (
          <TouchableOpacity key={keyword.value} style={styles.keywordContainer}>
            <Text style={styles.keywordText}>{keyword.value}</Text>
          </TouchableOpacity>
        ))}
      </Text>
    </View>
  );
}

export default function NewsDetails({ article, style, onWebArticleOpen }) {
  const { headline, source, snippet, pub_date: pubDate, keywords } = article;
  const date = moment(pubDate).format('MMMM Do YY');

  return (
    <View style={(style, styles.container)}>
      <Text style={styles.headline}>{headline.main}</Text>
      <View style={styles.containerSourceDate}>
        <Text style={styles.source}>{source}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.snippet}>{snippet}</Text>
      <TouchableOpacity onPress={onWebArticleOpen} style={styles.containerMore}>
        <Text style={styles.textMore}>Find out more...</Text>
      </TouchableOpacity>
      <KeywordList keywords={keywords} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFE',
    flex: 1,
    margin: 5,
  },
  containerSourceDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  snippet: {},
  source: {
    color: '#995555',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  date: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 12,
    margin: 5,
  },
  keywordLabel: {
    margin: 2,
  },
  keywordListContainer: {
    flexWrap: 'wrap',
  },
  keywordContainer: {
    backgroundColor: '#FFEADA',
    borderWidth: 3,
    borderColor: '#FCFCFE',
  },
  keywordText: {
    margin: 1,
    padding: 2,
  },
  containerMore: {
    padding: 2,
  },
  textMore: {
    color: '#00F',
    padding: 2,
  },
});
