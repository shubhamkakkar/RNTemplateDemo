import React from 'react';
import {StyleSheet} from 'react-native';
import FView, {TFView} from '../FView/FView';
export default function RowUI({style, children}: TFView) {
  return <FView style={{...styles.row, ...style}}>{children}</FView>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
