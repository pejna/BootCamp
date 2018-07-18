import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { setRefreshing } from '../actions';
import { fetchNews } from '../api';
import { NewsList } from '../components';

function options({ navigation }) {
  return {
    title: 'News',
    headerLeft: (
      <View style={styles.headerContainer}>
        <Button
          title="Categories"
          onPress={() => navigation.push('CategoriesModal')}
        />
        <Button
          title="Favorites"
          onPress={() => navigation.navigate('FavoritesModal')}
        />
      </View>
    ),
  };
}

class NewsListScreen extends Component {
  static navigationOptions = options;

  componentDidMount() {
    // load more stuff
  }

  render() {
    const { articles, isLoading, navigation } = this.props;
    return (
      <View style={styles.container}>
        <NewsList
          style={styles.body}
          articles={articles}
          onRefresh={
            // refresh stuff 
          }
          onLoadMore={
            // some stuff
          }
          isLoading={isLoading}
          onNewsPressed={url => {
            navigation.push('NewsDetails', { url });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#ff9966',
  },
  body: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    articles: state.articles,
    page: state.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListScreen);
