import React from 'react';
import {StyleSheet} from 'react-native';
import {FView, TextInputUI, UIText, DoneAnimatedButton} from '../../../UI';
import {useStringState, useBooleanState} from '../../../customHooks';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AuthenticationFormFields() {
  const [email, setEmail] = useStringState();
  const [password, setPassword] = useStringState();
  const [btnInTextLoader, toggleBtnInTextLoader] = useBooleanState();
  const [beginAnimation, toggleBeginAnimation] = useBooleanState();

  function onAnimationComplete() {
    //-> navigation login
  }

  function onPress() {
    // -> form submit action,

    toggleBtnInTextLoader();
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
        <TouchableOpacity>
          <UIText>Forgot Password</UIText>
        </TouchableOpacity>
      </FView>
      <DoneAnimatedButton
        {...{
          onAnimationComplete,
          btnInTextLoader,
          // disable: !(email.trim().length && password.trim().length),
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
  },
});
