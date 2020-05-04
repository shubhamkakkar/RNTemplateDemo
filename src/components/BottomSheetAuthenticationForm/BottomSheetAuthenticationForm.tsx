import React from 'react';
import {StyleSheet} from 'react-native';
import {FView, BottomSheet, UIText} from '../../UI';
import useBooleabState from '../../customHooks/useBooleanState';

export default function BottomSheetAuthenticationForm() {
  const [visible, onClose] = useBooleabState(true);
  console.log({visible});
  return (
    <BottomSheet {...{visible, onClose}}>
      <FView>
        <UIText>Shubham</UIText>
      </FView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({});
