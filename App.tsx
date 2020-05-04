import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NavigationView from './src/navigation/NavigationView';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flex}>
        <NavigationView />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
