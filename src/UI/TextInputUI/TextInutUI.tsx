import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {StyleSheet, TextInputProperties, TextInput, ViewStyle} from 'react-native';
import {FView} from '..';
import BaseHeading, {TBaseHeadingProps} from '../BaseHeading/BaseHeading';
import theme from '../../theme';
type TTextInputUI = {
  value: string;
  onChangeText: (param: string) => void | Dispatch<SetStateAction<string>>;
  customTexTInputStyling?: ViewStyle;
  containerStyle?: ViewStyle;
  texInputProps?: TextInputProperties;
  baseHeadingProps: TBaseHeadingProps;
};

export default function TextInputUI({
  containerStyle,
  value,
  onChangeText,
  texInputProps,
  customTexTInputStyling,
  baseHeadingProps,
}: TTextInputUI) {
  const [width, setWidth] = useState('99%');

  useEffect(() => {
    setTimeout(() => {
      // this is done to add copy paste login in RN
      setWidth('100%');
    }, 100);
  }, []);

  return (
    <FView style={containerStyle}>
      <BaseHeading {...baseHeadingProps} />
      <FView style={{...styles.textInputContainer}}>
        <TextInput
          scrollEnabled
          style={{
            ...styles.textInputDefaultStyling,
            ...customTexTInputStyling,
            width,
          }}
          {...{value, onChangeText, ...texInputProps}}
        />
      </FView>
    </FView>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: theme.primaryColor + 50,
    borderRadius: 5,
    padding: 0,
  },
  textInputDefaultStyling: {
    color: 'black',
    margin: 0,
    paddingVertical: 5,
  },
});
