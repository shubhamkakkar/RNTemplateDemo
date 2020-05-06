import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheet, FView} from '../../../UI';
import {useBooleanState} from '../../../customHooks';
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
        toggleVisible,
        alwaysOpen: true,
        customStyleScrollView: styles.customStyleScrollView,
      }}>
      <FView />
    </BottomSheet>
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
