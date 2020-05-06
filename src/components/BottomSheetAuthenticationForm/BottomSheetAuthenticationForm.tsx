import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useBooleanState} from '../../customHooks';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';
import ForgetPasswordFields from './ForgetPasswordFields/ForgetPasswordFields';
export default function BottomSheetAuthenticationForm() {
  const [visibleBaseForm, toggleVisibleBaseForm] = useBooleanState(true);
  const [visible, toggleVisible] = useBooleanState();
  useEffect(() => {
    if (!visibleBaseForm) {
      setTimeout(() => {
        // opening forget password  form
        !visible && toggleVisible();
      }, 500);
    }
  }, [visibleBaseForm]);

  useEffect(() => {
    if (!visible) {
      // setTimeout(() => {
      // opening base form
      !visibleBaseForm && toggleVisibleBaseForm();
      // }, 00);
    }
  }, [visible]);

  const renderForgetPassword = visible && !visibleBaseForm;

  return (
    <FView style={styles.container}>
      {!renderForgetPassword && (
        <BottomSheet
          {...{
            visible: visibleBaseForm,
            alwaysOpen: true,
          }}>
          <AuthenticationFormFields toggleVisible={toggleVisibleBaseForm} />
        </BottomSheet>
      )}
      {renderForgetPassword && (
        <ForgetPasswordFields {...{visible, toggleVisible}} />
      )}
    </FView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  temp: {
    flex: 1,
  },
});
