import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';

type TKeyboardAvoidingViewUI = {
  children: React.ReactNode;
  customStyleScrollView?: ViewStyle;
};

export default function KeyboardAvoidingViewUI({
  children,
  customStyleScrollView,
}: TKeyboardAvoidingViewUI) {
  return (
    <KeyboardAvoidingView
      style={s.flex}
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={customStyleScrollView}>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
