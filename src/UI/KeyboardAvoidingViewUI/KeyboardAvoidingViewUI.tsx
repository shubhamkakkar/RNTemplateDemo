import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
      <SafeAreaView style={s.flex}>
        <ScrollView style={customStyleScrollView}>{children}</ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
