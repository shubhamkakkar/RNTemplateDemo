import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useBooleanState} from '../../customHooks';
import {BottomSheet, FView} from '../../UI';
import AuthenticationFormFields from './AuthenticationFormFields/AuthenticationFormFields';
import ForgetPasswordFields from './ForgetPasswordFields/ForgetPasswordFields';
import FormHeader from './FormHeader/FormHeader';
export default function BottomSheetAuthenticationForm() {
  const [visibleBaseForm, toggleVisibleBaseForm] = useBooleanState(true);
  const [visible, toggleVisible] = useBooleanState();
  const [boolStateToTriggerFormHeaderAnimation, toggleboolStateToTriggerFormHeaderAnimation] = useBooleanState();
  useEffect(() => {
    if (!visible && !visibleBaseForm) {
      toggleboolStateToTriggerFormHeaderAnimation();
      setTimeout(() => {
        toggleVisible();
      }, 500);
    }
  }, [visibleBaseForm]);

  useEffect(() => {
    if (!visibleBaseForm && !visible) {
      toggleboolStateToTriggerFormHeaderAnimation();
      setTimeout(() => {
        toggleVisibleBaseForm();
      }, 100);
    }
  }, [visible]);

  const renderForgetPassword = visible && !visibleBaseForm;

  return (
    <React.Fragment>
      <FormHeader
        {...{
          title: boolStateToTriggerFormHeaderAnimation ? 'Authenticate' : 'Forget Password',
          boolStateToTriggerFormHeaderAnimation,
        }}
      />
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
        {renderForgetPassword && <ForgetPasswordFields {...{visible, toggleVisible}} />}
      </FView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
