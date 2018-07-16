import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function NewsDetailsHeader({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonBack}
        onPress={navigation.goBack()}
        title="Back"
        color="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ff9966',
  },
  buttonBack: { flex: 1 },
});
