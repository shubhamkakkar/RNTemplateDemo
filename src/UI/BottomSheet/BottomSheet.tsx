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
      duration: 1500,
      useNativeDriver: true,
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
      <FView>
        <UIText style={styles.headerText}>{headerTitle}</UIText>
      </FView>
      {!!alwaysOpen ? null : (
        <TouchableOpacity style={styles.button} onPress={closeAnimation}>
          <UIText style={styles.headerText}>Cancel</UIText>
        </TouchableOpacity>
      )}
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
    borderRadius: 10,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 45,
    borderColor: '#CCC',
  },
  buttonText: {
    color: '#333',
    fontSize: 50,
    alignSelf: 'center',
  },
});
