import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';

export default function BottomSheetAuthenticationForm() {
  return (
    <FView style={styles.container}>
      <BottomSheet
        {...{
          visible: true,
          alwaysOpen: true,
          customStyleScrollView: styles.customStyleScrollView,
        }}>
        <AuthenticationFormFields />
      </BottomSheet>
    </FView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  customStyleScrollView: {
    flex: 1,
  },
});
