import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { NewsDetailsBody, NewsDetailsHeader } from '../components/NewsDetails';

export default class NewsDetails extends Component {
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
      <View>
        <NewsDetailsHeader onBackPress={this.handleDetailsClose} />
        <NewsDetailsBody article={article} />
      </View>
    );
  }
}

NewsDetails.propTypes = {
  onDetailsClose: PropTypes.func.isRequired,
};
