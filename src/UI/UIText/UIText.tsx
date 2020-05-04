import React from 'react';
import {Text, TextStyle} from 'react-native';

type TUIText = {
  children: string | number | React.ReactElement;
  style?: TextStyle;
};

export default function UIText({children, style}: TUIText) {
  return <Text style={style}>{children}</Text>;
}
