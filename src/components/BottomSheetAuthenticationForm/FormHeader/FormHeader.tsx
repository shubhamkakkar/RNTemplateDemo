import React, {useEffect, useMemo} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {UIText} from '../../../UI';

type TLottieAnimation = {
  title: string;
  boolStateToTriggerFormHeaderAnimation: boolean;
};

export default function FormHeader({boolStateToTriggerFormHeaderAnimation, title}: TLottieAnimation) {
  const {height: HEIGHT} = useMemo(() => Dimensions.get('window'), []);
  const translateYHeaderTitle = useMemo(() => new Animated.Value(HEIGHT), [boolStateToTriggerFormHeaderAnimation]);
  const defaultAnimationConfig = useMemo(
    () => ({
      duration: 1200,
      useNativeDriver: true,
    }),
    [],
  );

  function triggerAnimation() {
    Animated.timing(translateYHeaderTitle, {
      toValue: 0,
      ...defaultAnimationConfig,
    }).start();
  }

  useEffect(() => {
    triggerAnimation();
  }, [boolStateToTriggerFormHeaderAnimation]);

  const opacity = translateYHeaderTitle.interpolate({
    inputRange: [0, HEIGHT],
    outputRange: [1, 0],
  });

  return (
    <Animated.View style={[styles.headerContainer, {opacity, transform: [{translateY: translateYHeaderTitle}]}]}>
      <UIText style={styles.headerTitle}>{title}</UIText>
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
