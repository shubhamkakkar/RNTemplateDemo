import React, {useMemo, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useBooleanState from '../../customHooks/useBooleanState';
import UIText from '../UIText/UIText';
import FView from '../FView/FView';
import LoaderUI from '../LoaderUI/LoaderUI';
type TDoneAnimatedButton = {
  children?: React.ReactNode;
  title?: string;
  onAnimationComplete: () => void;
  disable?: boolean;
  onPress: () => void;
  btnInTextLoader?: boolean;
};

export default function DoneAnimatedButton({
  title,
  disable,
  onAnimationComplete,
  btnInTextLoader,
  onPress,
}: TDoneAnimatedButton) {
  const opacity = useMemo(() => new Animated.Value(1), []);
  const [btnPress, setBtnPress] = useBooleanState();

  const scaleX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  function triggerAnimation(toValue?: number) {
    Animated.timing(opacity, {
      toValue: toValue || 0,
      duration: 950,
      useNativeDriver: true,
    }).start(() => {
      if (!toValue) {
        setBtnPress();
      } else {
        onAnimationComplete();
      }
    });
  }

  function onPressBtn() {
    onPress();
    triggerAnimation(1);
  }

  useEffect(() => {
    btnPress && triggerAnimation(1);
  }, [btnPress]);

  return (
    <FView>
      {btnPress ? (
        <FView style={style.processSuccessParent}>
          <Animated.View
            style={[
              style.proccessSuccessIconContainer,
              {transform: [{scale: scaleX}]},
            ]}>
            <AntDesign name="check" size={20} color="white" />
          </Animated.View>
        </FView>
      ) : (
        <Animated.View style={[styles.flex, {transform: [{scaleX}]}]}>
          <TouchableNativeFeedback
            disabled={!!disable}
            style={style.btnCommonStyle}
            onPress={onPressBtn}>
            {!!btnInTextLoader ? <LoaderUI /> : <UIText>Title</UIText>}
          </TouchableNativeFeedback>
        </Animated.View>
      )}
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
    backgroundColor: 'yellow',
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
