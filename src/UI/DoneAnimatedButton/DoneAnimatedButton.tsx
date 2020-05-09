import React, {useMemo, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useBooleanState from '../../customHooks/useBooleanState';
import UIText from '../UIText/UIText';
import FView from '../FView/FView';
import LoaderUI from '../LoaderUI/LoaderUI';
import theme from '../../theme';
type TDoneAnimatedButton = {
  children?: React.ReactNode;
  btnText?: string;
  onAnimationComplete: () => void;
  disable?: boolean;
  onPress: () => void;
  btnInTextLoader?: boolean;
  beginAnimation?: boolean;
};

export default function DoneAnimatedButton({
  btnText,
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
      } else {
        onAnimationComplete();
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
            style={[styles.btnCommonStyle, !!disable ? styles.disableBtnContainer : {}]}
            {...{onPress, disabled: !!disable}}>
            {!!btnInTextLoader ? (
              <LoaderUI color="white" size="small" />
            ) : (
              <UIText style={styles.btnTextStyle}>{btnText}</UIText>
            )}
          </TouchableNativeFeedback>
        </Animated.View>
      ) : (
        <FView style={styles.processSuccessParent}>
          <Animated.View style={[styles.proccessSuccessIconContainer, {transform: [{scaleX}]}]}>
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
  btnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnCommonStyle: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.primaryColor,
  },
  proccessSuccessIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.highlighterColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  processSuccessParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  disableBtnContainer: {
    backgroundColor: '#f1f2f3',
  },
  disableBtnText: {
    backgroundColor: '#2ca8e5',
  },
});
