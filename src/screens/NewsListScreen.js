import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { NewsList } from '../components';
import { invalidateArticles, loadArticles } from '..';

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

  constructor(props) {
    super(props);

    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    const { onRefresh } = this.props;
    onRefresh();
  }

  componentWillReceiveProps(nextProps) {
    const { isDataValid, dispatch } = this.props;
    if (isDataValid !== nextProps.isDataValid) {
      dispatch(loadArticles());
    }
  }

  handleRefresh() {
    const { isLoading, onRefresh } = this.props;
    if (isLoading) {
      return;
    }

    onRefresh();
  }

  handleLoadMore() {
    const { isLoading, onLoadMore } = this.props;
    if (isLoading) {
      return;
    }

    onLoadMore();
  }

  handleNewsPressed(url) {
    const { navigation } = this.props;
    navigation.push('NewsDetails', { url });
  }

  render() {
    const { articles, isLoading, onRefresh } = this.props;
    return (
      <View style={styles.container}>
        <NewsList
          style={styles.body}
          articles={articles}
          onRefresh={onRefresh}
          onLoadMore={this.handleLoadMore}
          isLoading={isLoading}
          onNewsPressed={this.handleNewsPressed}
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
    isDataValid: state.valid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRefresh: () => {
      dispatch(invalidateArticles());
    },
    onLoadMore: () => {
      dispatch(loadArticles());
    },
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListScreen);
