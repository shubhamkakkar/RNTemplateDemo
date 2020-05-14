import React from 'react';
import {StyleSheet, ScrollView, StyleProp, ViewStyle} from 'react-native';

type TFScrollView = {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
};

export default function FScrollView({children, contentContainerStyle, style}: TFScrollView) {
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
