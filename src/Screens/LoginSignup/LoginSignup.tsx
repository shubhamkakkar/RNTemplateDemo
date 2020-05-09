import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetAuthenticationForm} from '../../components';
import {FView} from '../../UI';
import theme from '../../theme';
export default function LoginSignup() {
  return (
    <FView style={styles.container}>
      <BottomSheetAuthenticationForm />
    </FView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
  },
});
