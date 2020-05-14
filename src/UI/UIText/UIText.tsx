import React from 'react';
import {Text, TextStyle, TextProperties} from 'react-native';

interface TUIText extends TextProperties {
  children: string | number | React.ReactElement | any;
  bold?: boolean;
}

export default function UIText({children, style, bold, ...rest}: TUIText) {
  return <Text style={[{fontWeight: bold ? 'bold' : 'normal'}, style]}>{children}</Text>;
}
