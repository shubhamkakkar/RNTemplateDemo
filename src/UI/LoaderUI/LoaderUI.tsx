import React from 'react';
import {ActivityIndicator} from 'react-native';
import {FView} from '..';

type TLoaderUI = {
  size?: 'small' | 'large';
  color?: string;
};
export default function LoaderUI({
  size = 'small',
  color = '#0000ff',
}: TLoaderUI) {
  return (
    <FView>
      <ActivityIndicator {...{size, color}} />
    </FView>
  );
}
