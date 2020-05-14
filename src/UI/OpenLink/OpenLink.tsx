import React from 'react';
import {Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TOpenLink = {
  url: string;
  children: React.ReactNode;
};

export default function OpenLink({url, children}: TOpenLink) {
  async function onPress() {
    await Linking.openURL(url);
  }
  return <TouchableOpacity {...{onPress}}>{children}</TouchableOpacity>;
}
