import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NavigationView from './src/navigation/NavigationView';
import {useFCM} from './src/notificationSetup';

export default function App() {
  const {fcmToken, remoteMessage} = useFCM();
  console.log({fcmToken, remoteMessage});
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
