import React, {useMemo, useEffect} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import UIText from '../UIText/UIText';
import useBooleanState from '../../customHooks/useBooleanState';
import AntDesign from 'react-native-vector-icons/AntDesign';
type TDoneAnimatedButton = {
  children?: React.ReactNode;
  title?: string;
};

export default function DoneAnimatedButton() {
  const opacity = useMemo(() => new Animated.Value(1), []);
  const [btnPress, setBtnPress] = useBooleanState();

  const scaleX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  function triggerAnimation() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setBtnPress();
    });
  }
  return (
    <Animated.View style={[styles.flex, {transform: [{scaleX}]}]}>
      {btnPress ? (
        <TouchableNativeFeedback
          style={style.btnCommonStyle}
          onPress={triggerAnimation}>
          <UIText>Title</UIText>
        </TouchableNativeFeedback>
      ) : (
        <View>
          <AntDesign name="Check" size={20} color="white" />
        </View>
      )}
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
