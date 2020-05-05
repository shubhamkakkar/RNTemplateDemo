import React, {useMemo, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useBooleanState from '../../customHooks/useBooleanState';
import UIText from '../UIText/UIText';
import FView from '../FView/FView';
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

  function triggerAnimation(toValue?: number) {
    Animated.timing(opacity, {
      toValue: toValue || 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      if (!toValue) {
        setBtnPress();
      }
    });
  }

  useEffect(() => {
    btnPress && triggerAnimation(1);
  }, [btnPress]);

  return (
    <FView>
      {btnPress && (
        <FView style={style.processSuccessParent}>
          <Animated.View
            style={[
              style.proccessSuccessIconContainer,
              {transform: [{scale: scaleX}]},
            ]}>
            <AntDesign name="check" size={20} color="white" />
          </Animated.View>
        </FView>
      )}
      <Animated.View style={[styles.flex, {transform: [{scaleX}]}]}>
        {!btnPress && (
          <TouchableNativeFeedback
            style={style.btnCommonStyle}
            onPress={() => triggerAnimation()}>
            <UIText>Title</UIText>
          </TouchableNativeFeedback>
        )}
      </Animated.View>
    </FView>
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
  proccessSuccessIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  processSuccessParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
