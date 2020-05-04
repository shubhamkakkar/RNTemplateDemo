import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetAuthenticationForm} from '../../components';
import {FView} from '../../UI';
export default function LoginSignup() {
  return (
    <FView style={styles.container}>
      <FView />
      <BottomSheetAuthenticationForm />
    </FView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
  },
});
