import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import NewsListItem from './NewsListItem';

function EmptyListFooter({ show, style }) {
  if (show) {
    return <View />;
  }
  return (
    <View style={style}>
      <Text>No news items!</Text>
    </View>
  );
}

export default function NewsListBody({
  onRefresh,
  isRefreshing,
  onNewsPressed,
  articles,
  style,
}) {
  const showFooter = isRefreshing || articles.length === 0;

  return (
    <FlatList
      style={(style, styles.container)}
      data={articles}
      keyExtractor={item => item._id}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      renderItem={({ item }) => (
        <NewsListItem newsItem={item} onPress={onNewsPressed} />
      )}
      ListFooterComponent={
        <EmptyListFooter show={showFooter} style={styles.emptyFooter} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF' },
  emptyFooter: {
    flex: 1,
  },
});
