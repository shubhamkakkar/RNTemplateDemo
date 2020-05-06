import React, {useMemo, useEffect} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useBooleanState, useStringState} from '../../../customHooks';
import {DoneAnimatedButton, FView, TextInputUI, UIText} from '../../../UI';
import {transform} from '@babel/core';

type TAuthenticationFormFields = {
  toggleVisible: () => void;
};

export default function AuthenticationFormFields({
  toggleVisible,
}: TAuthenticationFormFields) {
  const [email, setEmail] = useStringState();
  const [password, setPassword] = useStringState();
  const [confirmPassword, setConfirmPassword] = useStringState();
  const [btnInTextLoader, toggleBtnInTextLoader] = useBooleanState();
  const [beginAnimation, toggleBeginAnimation] = useBooleanState();
  const [showSignupFields, toggleShwoSignupFields] = useBooleanState(true);

  const {width: WIDTH} = useMemo(() => Dimensions.get('window'), []);
  const translateXSignupFields = useMemo(() => new Animated.Value(WIDTH), []);

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

  function animateTranslateXSignupFields() {
    Animated.timing(translateXSignupFields, {
      toValue: showSignupFields ? 0 : WIDTH,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      toggleShwoSignupFields();
    });
  }

  return (
    <Animated.View style={{paddingBottom: 20}}>
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
      <Animated.View
        style={[
          {
            transform: [{translateX: translateXSignupFields}],
          },
        ]}>
        <TextInputUI
          {...{
            value: confirmPassword,
            onChangeText: setConfirmPassword,
            containerStyle: styles.textInputStyle,
            baseHeadingProps: {
              title: 'Confirm Password',
            },
            texInputProps: {
              secureTextEntry: true,
            },
          }}
        />
      </Animated.View>
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
      <FView style={styles.altOptionBtnContainer}>
        <TouchableOpacity onPress={animateTranslateXSignupFields}>
          <UIText bold>Sign Up Instead</UIText>
        </TouchableOpacity>
      </FView>
    </Animated.View>
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
  altOptionBtnContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
