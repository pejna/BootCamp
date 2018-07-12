import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function NewsListHeader({
  style,
  onCategoriesPress,
  onFavoritesPress,
}) {
  return (
    <View style={(style, styles.container)}>
      <Button
        style={styles.buttonStyle}
        title="Categories"
        onPress={onCategoriesPress}
      />
      <Button
        style={styles.buttonStyle}
        title="Favorites"
        onPress={onFavoritesPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonStyle: {
    flex: 1,
  },
});
