import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import NewsListHeader from '../components/NewsList/Header';

export default class NewsList extends Component {
    render() {
        return (
            <View>
                <NewsListHeader />
                <FlatList

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});