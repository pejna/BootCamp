import React, { Component } from 'react';
import { View } from 'react-native';
import { ListHeader } from './ListHeader';
import { ListBody } from './ListBody';

export class ScreenNewsList extends Component {
    render() {
        return (
            <View>
                <ListHeader></ListHeader>
                <ListBody></ListBody>
            </View>
        );
    }
}