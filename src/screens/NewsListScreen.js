import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { NewsList } from '../components';
import { invalidateNews, loadArticles } from '../actions';

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
    const { onRefresh } = this.props;
    onRefresh();
  }

  render() {
    const {
      articles,
      isLoading,
      navigation,
      onRefresh,
      onLoadMore,
    } = this.props;
    return (
      <View style={styles.container}>
        <NewsList
          style={styles.body}
          articles={articles}
          onRefresh={onRefresh}
          onLoadMore={onLoadMore}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRefresh: () => {
      if (ownProps.isLoading) {
        return;
      }
      dispatch(invalidateNews());
      dispatch(loadArticles());
    },
    onLoadMore: () => {
      if (ownProps.isLoading) {
        return;
      }
      dispatch(loadArticles());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListScreen);
