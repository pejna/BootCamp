import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { NewsDetailsBody, NewsDetailsHeader } from '../components';

export default class ScreenNewsDetails extends Component {
  constructor(props) {
    super(props);
    this.handleDetailsClose = this.handleDetailsClose.bind(this);
  }

  handleDetailsClose() {
    const { onDetailsClose } = this.props;
    onDetailsClose();
  }

  render() {
    const { article, onOpenWebArticle } = this.props;

    return (
      <View style={styles.container}>
        <NewsDetailsHeader onBackPress={this.handleDetailsClose} />
        <NewsDetailsBody
          onOpenWebArticle={onOpenWebArticle}
          style={styles.body}
          article={article}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
});

ScreenNewsDetails.propTypes = {
  onDetailsClose: PropTypes.func.isRequired,
};
