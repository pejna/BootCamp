import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListHeader } from './ListHeader';
import { NewsListItem } from '../components/NewsList/Item'

export class ScreenNewsList extends Component {
    render() {
        return (
            <View>
                <ListHeader />
                <FlatList
                    data={props.articles}
                    renderItem={({ item }) => <NewsListItem newsItem={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});