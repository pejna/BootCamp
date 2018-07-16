import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { NewsDetailsBody, NewsDetailsHeader } from '../components';

export default class ScreenNewsDetails extends Component {
  static navigationOptions = {
    headerTitle: <NewsDetailsHeader />,
  };

  constructor(props) {
    super(props);

    this.state = { article: props.navigation.state.params.article };

    this.handleDetailsClose = this.handleDetailsClose.bind(this);
    this.handleOpenWebArticle = this.handleOpenWebArticle.bind(this);
  }

  handleDetailsClose() {
    const { onDetailsClose } = this.props;
    onDetailsClose();
  }

  handleOpenWebArticle() {
    const { navigation } = this.props;
    const { article: art } = this.state;

    navigation.navigate('WebArticle', { article: art });
  }

  render() {
    const { article } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <NewsDetailsHeader onBackPress={navigation.goBack()} />
        <NewsDetailsBody
          onOpenWebArticle={this.handleOpenWebArticle}
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
