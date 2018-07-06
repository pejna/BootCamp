import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { NewsListItem } from '../components';

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.handleNewsListRefresh = this.handleNewsListRefresh.bind(this);
  }

  handleNewsPressed(itemId) {
    const { onNewsSelected } = this.props;
    onNewsSelected(itemId);
  }

  handleNewsListRefresh() {
    const { onRefresh } = this.props;

    onRefresh();
  }

  render() {
    const { articles } = this.props;

    return (
      <View style={styles.container}>
        <View style={(styles.content, styles.header)}>
          <Text>List Header</Text>
        </View>

        <FlatList
          style={[styles.content, styles.newsList]}
          data={articles}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <NewsListItem
              newsItem={item}
              onPress={this.handleNewsPressed}
              onRefresh={this.handleNewsListRefresh}
            />
          )}
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
  header: {
    padding: 10,
    paddingVertical: 20,
    flex: 1,
    backgroundColor: '#ff9966',
  },
});
