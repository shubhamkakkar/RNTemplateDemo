import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';

export default function BottomSheetAuthenticationForm() {
  return (
    <BottomSheet
      {...{visible: true, alwaysOpen: true, customHeightInPercentage: '50%'}}>
      <FView>
        <AuthenticationFormFields />
      </FView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});
