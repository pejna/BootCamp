import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class NewsListItem extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { newsItem, onPress } = this.props;
    const { web_url: url } = newsItem;

    onPress(url);
  }

  render() {
    const { newsItem, style } = this.props;
    const { headline, source, snippet } = newsItem;

    return (
      <TouchableOpacity
        style={(styles.container, style)}
        onPress={this.handlePress}
      >
        <View style={styles.headlineView}>
          <Text style={styles.headlineText}>{headline.main}</Text>
        </View>
        <Text style={styles.snippetText}>{snippet}</Text>
        <View style={styles.sourceView}>
          <Text style={styles.sourceText}>{source}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  headlineView: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  headlineText: {
    fontWeight: 'bold',
    color: '#303568',
  },
  snippetText: {
    color: '#202020',
  },
  sourceView: {
    flexDirection: 'row',
  },
  sourceText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#995555',
  },
});

NewsListItem.propTypes = {
  newsItem: PropTypes.shape({
    headline: PropTypes.shape({
      main: PropTypes.string.isRequired,
    }).isRequired,
    source: PropTypes.string,
    snippet: PropTypes.string,
    web_url: PropTypes.string,
  }),
  onPress: PropTypes.func,
};
