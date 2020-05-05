import React, {useMemo} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UIText from '../UIText/UIText';

type TDoneAnimatedButton = {
  children?: React.ReactNode;
  title?: string;
};

export default function DoneAnimatedButton() {
  const opacity = useMemo(() => new Animated.Value(1), []);

  function triggerAnimation() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }
  return (
    <Animated.View style={[styles.flex, {opacity}]}>
      <TouchableOpacity style={style.btnCommonStyle} onPress={triggerAnimation}>
        <UIText>Title</UIText>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

const style = StyleSheet.create({
  btnCommonStyle: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
});
