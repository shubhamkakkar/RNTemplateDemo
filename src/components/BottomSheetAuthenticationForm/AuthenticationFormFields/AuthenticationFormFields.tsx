import {Formik, FormikHelpers} from 'formik';
import React, {useMemo} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useBooleanState} from '../../../customHooks';
import {DoneAnimatedButton, FormikTextInput, FView, UIText} from '../../../UI';
import {
  initialState,
  TInitialState,
  validationSchemaYup,
} from './initialStateAuthenticationFormFields';

type TAuthenticationFormFields = {
  toggleVisible: () => void;
};

export default function AuthenticationFormFields({toggleVisible}: TAuthenticationFormFields) {
  const [beginAnimation, toggleBeginAnimation] = useBooleanState();
  const [showSignupFields, toggleShwoSignupFields] = useBooleanState(true);

  const {width: WIDTH} = useMemo(() => Dimensions.get('window'), []);
  const translateXSignupFields = useMemo(() => new Animated.Value(WIDTH), []);

  function onAnimationComplete() {
    //-> navigation login
  }

  function onPress(value: TInitialState, actions: FormikHelpers<TInitialState>) {
    // -> form submit action
    // demo for animation view
    setTimeout(() => {
      actions.setSubmitting(false);
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
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchemaYup(showSignupFields)}
        initialValues={initialState(showSignupFields)}
        onSubmit={(value, actions) => onPress(value, actions)}>
        {({values, handleChange, isValid, isSubmitting, handleSubmit, errors}) => {
          console.log({values, errors, isValid, isSubmitting});
          return (
            <React.Fragment>
              <FormikTextInput
                {...{
                  fieldName: 'email',
                  value: values.email,
                  onChangeText: handleChange('email'),
                  containerStyle: styles.textInputStyle,
                  baseHeadingProps: {
                    title: 'Email',
                  },
                }}
              />
              <FormikTextInput
                {...{
                  fieldName: 'password',
                  value: values.password,
                  onChangeText: handleChange('password'),
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
                <FormikTextInput
                  {...{
                    fieldName: 'confirmPassword',
                    value: values.confirmPassword,
                    onChangeText: handleChange('confirmPassword'),
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
              {!beginAnimation && (
                <FView style={styles.forgotPasswordBtnContainer}>
                  <TouchableOpacity disabled={isSubmitting} onPress={toggleVisible}>
                    <UIText bold>Forgot Password</UIText>
                  </TouchableOpacity>
                </FView>
              )}
              <DoneAnimatedButton
                {...{
                  onAnimationComplete,
                  btnInTextLoader: isValid && isSubmitting,
                  beginAnimation,
                  disable: !isValid || isSubmitting,
                  onPress: handleSubmit,
                  btnText: !showSignupFields ? 'Sign Up' : 'Login',
                }}
              />
              {!beginAnimation && (
                <FView style={styles.altOptionBtnContainer}>
                  <TouchableOpacity disabled={isSubmitting} onPress={animateTranslateXSignupFields}>
                    <UIText bold> {showSignupFields ? 'Sign Up' : 'Login'}</UIText>
                  </TouchableOpacity>
                </FView>
              )}
            </React.Fragment>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
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
