import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useBooleanState, useStringState} from '../../../customHooks';
import {DoneAnimatedButton, FView, TextInputUI, UIText} from '../../../UI';

type TAuthenticationFormFields = {
  toggleVisible: () => void;
};

export default function AuthenticationFormFields({
  toggleVisible,
}: TAuthenticationFormFields) {
  const [email, setEmail] = useStringState();
  const [password, setPassword] = useStringState();
  const [btnInTextLoader, toggleBtnInTextLoader] = useBooleanState();
  const [beginAnimation, toggleBeginAnimation] = useBooleanState();

  function onAnimationComplete() {
    //-> navigation login
  }

  function onPress() {
    // -> form submit action
    toggleBtnInTextLoader();
    // demo for animation view
    setTimeout(() => {
      toggleBtnInTextLoader();
      toggleBeginAnimation();
    }, 2000);
  }

  return (
    <FView>
      <TextInputUI
        {...{
          value: email,
          onChangeText: setEmail,
          containerStyle: styles.textInputStyle,
          baseHeadingProps: {
            title: 'Email',
          },
        }}
      />
      <TextInputUI
        {...{
          value: password,
          onChangeText: setPassword,
          containerStyle: styles.textInputStyle,
          baseHeadingProps: {
            title: 'Password',
          },
          texInputProps: {
            secureTextEntry: true,
          },
        }}
      />
      <FView style={styles.forgotPasswordBtnContainer}>
        <TouchableOpacity onPress={toggleVisible}>
          <UIText bold>Forgot Password</UIText>
        </TouchableOpacity>
      </FView>
      <DoneAnimatedButton
        {...{
          onAnimationComplete,
          btnInTextLoader,
          disable: !(email.trim().length && password.trim().length),
          onPress,
          beginAnimation,
        }}
      />
    </FView>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    marginBottom: 5,
  },
  forgotPasswordBtnContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
});
