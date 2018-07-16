import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import NewsListItem from './NewsListItem';

function EmptyListComponent({ show, style }) {
  if (!show) {
    return <View />;
  }
  return (
    <View style={style}>
      <Text>No news items!</Text>
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

export default class NewsListBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isListScrolled: false,
    };

    this.handleEndReached = this.handleEndReached.bind(this);
    this.handleScrollBeginDrag = this.handleScrollBeginDrag.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleScrollBeginDrag() {
    const { isListScrolled } = this.state;

    if (isListScrolled) {
      return;
    }

    this.setState({ isListScrolled: true });
  }

  handleRefresh() {
    const { onRefresh } = this.props;
    this.setState({ isListScrolled: false });
    onRefresh();
  }

  handleEndReached() {
    const { isListScrolled } = this.state;

    if (isListScrolled) {
      const { onLoadMore } = this.props;
      onLoadMore();
    }
  }

  render() {
    const { isRefreshing, articles, style, onNewsPressed } = this.props;
    const showListEmpty = isRefreshing || articles.length === 0;

    return (
      <FlatList
        style={(style, styles.container)}
        data={articles}
        keyExtractor={item => item.uri}
        onRefresh={this.handleRefresh}
        refreshing={isRefreshing}
        renderItem={({ item }) => (
          <NewsListItem newsItem={item} onPress={onNewsPressed} />
        )}
        ListEmptyComponent={
          <EmptyListComponent show={showListEmpty} style={styles.emptyFooter} />
        }
        ItemSeparatorComponent={Separator}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={this.handleScrollBeginDrag}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF' },
  emptyFooter: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#AAAAAA',
    height: 1,
    width: '96%',
    marginLeft: '2%',
  },
});
