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
      style={styles.flex}
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[customStyleScrollView]}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
