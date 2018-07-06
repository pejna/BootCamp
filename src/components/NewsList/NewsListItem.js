import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

class NewsListItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemPress = this.handleItemPress.bind(this);
  }

  handleItemPress() {
    const { newsItem, onPress } = this.props;
    onPress(newsItem);
  }

  render() {
    const { newsItem } = this.props;
    const { headline, source, snippet } = newsItem;

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleItemPress}>
        <Text>{headline.main}</Text>
        <Text>{source}</Text>
        <Text>{snippet}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
});

export default NewsListItem;

NewsListItem.propTypes = {
  newsItem: PropTypes.shape({
    headline: PropTypes.shape({
      main: PropTypes.string.isRequired,
    }).isRequired,
    source: PropTypes.string,
    snipped: PropTypes.string,
    _id: PropTypes.string,
  }),
  onPress: PropTypes.func,
};
