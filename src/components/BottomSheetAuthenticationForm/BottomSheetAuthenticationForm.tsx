import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useBooleanState} from '../../customHooks';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';
import ForgetPasswordFormFields from './ForgetPassword/ForgetPasswordFormFields';
import {StateContextForgetPassword} from './ForgetPassword/stateContext';

export default function BottomSheetAuthenticationForm() {
  const [
    visibleForgetPasswordBottomSheet,
    toggleVisibleForgetPasswordBottomSheet,
  ] = useBooleanState(true);

  return (
    <FView style={styles.container}>
      <BottomSheet
        {...{
          visible: true,
          alwaysOpen: true,
          customStyleScrollView: styles.customStyleScrollView,
        }}>
        <StateContextForgetPassword.Provider
          value={{
            visible: visibleForgetPasswordBottomSheet,
            toggleVisible: toggleVisibleForgetPasswordBottomSheet,
          }}>
          <AuthenticationFormFields />
        </StateContextForgetPassword.Provider>
      </BottomSheet>
      <BottomSheet
        {...{
          visible: visibleForgetPasswordBottomSheet,
          onClose: toggleVisibleForgetPasswordBottomSheet,
          customStyleScrollView: styles.customStyleScrollView,
        }}>
        <ForgetPasswordFormFields />
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
