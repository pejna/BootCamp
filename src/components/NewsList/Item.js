import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';



export default class NewsListItem extends Component {

    onItemPress(){

    }

    render() {
        return (
            <TouchableOpacity onPress={this.onItemPress}>
                <Text>{this.props.newsItem.headline}</Text>
                <Text>{this.props.newsItem.source}</Text>
                <Text>{this.props.newsItem.snippet}</Text>     
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});