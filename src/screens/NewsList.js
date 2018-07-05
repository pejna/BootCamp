import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NewsListHeader from '../components/NewsList/Header';
import NewsListItem from '../components/NewsList/Item';

export default class NewsList extends Component {
  render() {
    console.log(this.props.articles);
    return (
      <View style={styles.container}>
        <NewsListHeader style={[styles.content]} />

        <FlatList
          style={[styles.content, styles.newsList]}
          data={this.props.articles}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <NewsListItem newsItem={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {},
  newsList: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
});
