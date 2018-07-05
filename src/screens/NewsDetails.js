import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NewsDetailsHeader from '../components/NewsDetails/Header';
import NewsDetailsBody from '../components/NewsDetails/Body';

export default class NewsDetails extends Component {
    render() {
        return (
            <View>
                <NewsDetailsHeader />
                <NewsDetailsBody />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});