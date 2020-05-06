import React from 'react';
import {StyleSheet} from 'react-native';
import {useBooleanState} from '../../customHooks';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';
export default function BottomSheetAuthenticationForm() {
  const [visibleBaseForm, toggleVisibleBaseForm] = useBooleanState(true);
  return (
    <FView style={styles.container}>
      <BottomSheet
        {...{
          visible: visibleBaseForm,
          onClose: toggleVisibleBaseForm,
          alwaysOpen: true,
          customStyleScrollView: styles.customStyleScrollView,
        }}>
        <AuthenticationFormFields toggleVisible={toggleVisibleBaseForm} />
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
