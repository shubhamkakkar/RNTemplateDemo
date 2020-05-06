import React from 'react';
import {BottomSheet, FView} from '../../../UI';
type TForgetPasswordFields = {
  visible: boolean;
  toggleVisible: () => void;
};

export default function ForgetPasswordFields({
  visible,
  toggleVisible,
}: TForgetPasswordFields) {
  return (
    <BottomSheet
      {...{
        visible,
        onClose: toggleVisible,
        headerTitle: 'Forget Password',
      }}>
      <FView />
    </BottomSheet>
  );
}
