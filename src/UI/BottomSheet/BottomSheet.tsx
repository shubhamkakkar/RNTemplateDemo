import React, {ReactNode, useMemo, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {FView, KeyboardAvoidingViewUI, UIText} from '../index';

type ModalProps = {
  children: ReactNode;
  onClose?: () => void;
  visible: boolean;
  alwaysOpen?: boolean;
  headerTitle?: string;
  customStyleScrollView?: ViewProps;
  customHeightInPercentage?: string;
};

export default function BottomSheet({
  headerTitle,
  visible,
  children,
  onClose,
  customStyleScrollView,
  alwaysOpen,
  customHeightInPercentage,
}: ModalProps) {
  const opacity = useMemo(() => new Animated.Value(0), []);
  const {height: HEIGHT} = useMemo(() => Dimensions.get('window'), []);
  const defaultAnimationConfig = useMemo(
    () => ({
      duration: 950,
      useNativeDriver: true,
    }),
    [],
  );
  function triggerAnimation() {
    Animated.timing(opacity, {
      toValue: 1,
      ...defaultAnimationConfig,
    }).start();
  }

  function closeAnimation() {
    Animated.timing(opacity, {
      toValue: 0,
      ...defaultAnimationConfig,
    }).start(() => {
      if (visible) {
        onClose();
      }
    });
  }

  useEffect(() => {
    if (visible) {
      triggerAnimation();
    } else {
      closeAnimation();
    }
  }, [visible]);

  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [HEIGHT, 0],
  });

  const Header = () => (
    <View style={styles.header}>
      {!!alwaysOpen ? null : (
        <TouchableOpacity style={styles.button} onPress={closeAnimation}>
          <UIText style={styles.closeBtnText}>Cancel</UIText>
        </TouchableOpacity>
      )}
      <UIText style={styles.headerText}>{headerTitle}</UIText>
    </View>
  );
  return (
    <Animated.View
      style={[
        styles.modal,
        {
          opacity,
          transform: [{translateY}],
        },
      ]}>
      <Header />
      <KeyboardAvoidingViewUI {...{customStyleScrollView}}>
        {children}
      </KeyboardAvoidingViewUI>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    flex: 1,
  },
  header: {
    marginHorizontal: 5,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    alignItems: 'flex-end',
  },
  closeBtnText: {
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#333',
    fontSize: 50,
    alignSelf: 'center',
  },
});
