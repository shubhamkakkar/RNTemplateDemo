import React, {useEffect, useMemo} from 'react';
import {FView, UIText} from '../../../UI';
import {Animated, StyleSheet, Dimensions} from 'react-native';
import {useBooleanState} from '../../../customHooks';

type TLottieAnimation = {
  renderForgetPassword: boolean;
};

export default function FormHeader({renderForgetPassword}: TLottieAnimation) {
  const {height: HEIGHT} = useMemo(() => Dimensions.get('window'), []);
  const translateYHeaderTitle = useMemo(() => new Animated.Value(HEIGHT), []);
  const opacity = useMemo(() => new Animated.Value(0), [renderForgetPassword]);
  const defaultAnimationConfig = useMemo(
    () => ({
      duration: 1050,
      useNativeDriver: true,
    }),
    [],
  );

  function triggerAnimation() {
    Animated.parallel([
      Animated.timing(translateYHeaderTitle, {
        toValue: 0,
        ...defaultAnimationConfig,
      }),
    ]).start();
  }

  function opacityAnimation() {
    Animated.timing(opacity, {
      toValue: 1,
      ...defaultAnimationConfig,
    }).start();
  }

  useEffect(() => {
    triggerAnimation();
  }, []);

  useEffect(() => {
    opacityAnimation();
  }, [renderForgetPassword]);

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {opacity, transform: [{translateY: translateYHeaderTitle}]},
      ]}>
      <UIText style={styles.headerTitle}>TITLE</UIText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
