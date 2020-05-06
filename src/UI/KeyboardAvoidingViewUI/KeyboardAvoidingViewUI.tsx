import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {FView} from '..';

type TKeyboardAvoidingViewUI = {
  children: React.ReactNode;
  // customStyleScrollView?: ViewStyle;
};

export default function KeyboardAvoidingViewUI({
  children,
}: TKeyboardAvoidingViewUI) {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.flex}
        contentContainerStyle={styles.flex}
        enabled={true}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>{children}</ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flexGrow: {
    flexGrow: 1,
  },
});
