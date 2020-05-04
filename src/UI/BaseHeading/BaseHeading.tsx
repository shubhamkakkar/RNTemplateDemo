import React from 'react';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {FView} from '../';
import UIText from '../UIText/UIText';

export type TBaseHeadingProps = {
  title: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function BaseHeading({
  title,
  containerStyle,
  textStyle,
}: TBaseHeadingProps) {
  return (
    <FView style={{...containerStyle}}>
      <UIText style={{...styles.defaultHeadingStyle, ...textStyle}}>
        {title}
      </UIText>
    </FView>
  );
}

const styles = StyleSheet.create({
  defaultHeadingStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
});
