import React from 'react';
import {BottomSheet} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';

export default function BottomSheetAuthenticationForm() {
  return (
    <BottomSheet
      {...{
        visible: true,
        alwaysOpen: true,
      }}>
      <AuthenticationFormFields />
    </BottomSheet>
  );
}
