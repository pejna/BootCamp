import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NewsList } from '../components';
import { invalidateArticles, loadArticles } from '..';

class NewsListScreen extends Component {
  static navigatorButtons = {
    leftButtons: [
      { title: 'Categories', id: 'categories' },
      { title: 'Favorites', id: 'favorites' },
    ],
  };

  constructor(props) {
    super(props);
    const { navigator } = this.props;

    this.handleNewsPressed = this.handleNewsPressed.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
    navigator.setOnNavigatorEvent(this.handleNavigatorEvent.bind(this));
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

  handleNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      const { navigator } = this.props;
      switch (event.id) {
        case 'categories':
          navigator.showModal({ screen: 'CategoriesModal' });
          break;
        case 'favorites':
          navigator.showModal({ screen: 'FavoritesModal' });
          break;
        default:
      }
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
    const { navigator } = this.props;
    navigator.push({
      screen: 'NewsDetails',
      passProps: {
        url,
      },
    });
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
