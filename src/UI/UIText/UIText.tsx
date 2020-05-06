import React from 'react';
import {Text, TextStyle} from 'react-native';

type TUIText = {
  children: string | number | React.ReactElement;
  style?: TextStyle;
  bold?: boolean;
};

export default function UIText({children, style, bold}: TUIText) {
  return (
    <Text style={[{fontWeight: bold ? 'bold' : 'normal'}, style]}>
      {children}
    </Text>
  );
}
