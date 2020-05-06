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
  beginAnimation?: boolean;
};

export default function DoneAnimatedButton({
  title,
  disable,
  onAnimationComplete,
  btnInTextLoader,
  beginAnimation,
  onPress,
}: TDoneAnimatedButton) {
  const opacity = useMemo(() => new Animated.Value(1), []);
  const [showAnimatedView, toggleShowAnimatedView] = useBooleanState();

  const defaultAnimationConfig = useMemo(
    () => ({
      duration: 950,
      useNativeDriver: true,
    }),
    [],
  );

  const scaleX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  function triggerAnimation(toValue?: number) {
    toValue != undefined && toggleShowAnimatedView();

    Animated.timing(opacity, {
      toValue: toValue || 0,
      ...defaultAnimationConfig,
    }).start(() => {
      if (toValue === undefined) {
        triggerAnimation(1);
      }
    });
  }

  useEffect(() => {
    beginAnimation && triggerAnimation();
  }, [beginAnimation]);

  return (
    <FView>
      {!showAnimatedView ? (
        <Animated.View style={[styles.flex, {transform: [{scaleX}]}]}>
          <TouchableNativeFeedback
            style={style.btnCommonStyle}
            {...{onPress, disabled: !!disable}}>
            {!!btnInTextLoader ? <LoaderUI /> : <UIText>Title</UIText>}
          </TouchableNativeFeedback>
        </Animated.View>
      ) : (
        <FView style={style.processSuccessParent}>
          <Animated.View
            style={[
              style.proccessSuccessIconContainer,
              {transform: [{scaleX}]},
            ]}>
            <AntDesign name="check" size={20} color="white" />
          </Animated.View>
        </FView>
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