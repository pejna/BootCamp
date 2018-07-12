import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function newsListHeader({ onBackPress }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonBack}
        onPress={onBackPress}
        title="Back"
        color="#FFFFFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonBack: { flex: 1 },
});
