import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

type TFView = {
  children?: React.ReactElement;
  style?: ViewStyle;
};

export default function FView({children, style}: TFView) {
  return (
    <View style={[styles.flexContainer, style]}>{children && children}</View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
});
