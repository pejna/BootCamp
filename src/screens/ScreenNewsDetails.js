import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { NewsDetailsBody, NewsDetailsHeader } from '../components/NewsDetails';

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
    const { article } = this.props;

    return (
      <View style={styles.container}>
        <NewsDetailsHeader
          style={styles.header}
          onBackPress={this.handleDetailsClose}
        />
        <NewsDetailsBody style={styles.body} article={article} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {},
  body: { flex: 1 },
});

ScreenNewsDetails.propTypes = {
  onDetailsClose: PropTypes.func.isRequired,
};
