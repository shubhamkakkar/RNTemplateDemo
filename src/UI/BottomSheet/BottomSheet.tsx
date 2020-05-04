import React, {ReactNode} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {KeyboardAvoidingViewUI, FView, UIText} from '../index';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  visible: boolean;
  headerTitle: string;
  hack?: boolean;
  keyboardVerticalOffset?: number;
  customStyleScrollView?: ViewProps;
};

const {height} = Dimensions.get('screen');
const translateYHeight = height / 6;

export default function BottomSheet({
  headerTitle,
  visible,
  children,
  onClose,
  customStyleScrollView,
}: ModalProps) {
  const translateY = React.useMemo(() => new Animated.Value(height), []);

  function animationStart(toValue: number) {
    Animated.spring(translateY, {
      toValue,
      useNativeDriver: true,
    }).start(() => {});
  }

  React.useEffect(() => {
    visible && animationStart(translateYHeight);
  }, [visible]);

  function onPress() {
    animationStart(-height);
    onClose();
  }

  const Header = () => (
    <View style={styles.header}>
      <FView>
        <UIText style={styles.headerText}>{headerTitle}</UIText>
      </FView>
      <TouchableOpacity style={styles.button} {...{onPress}}>
        <UIText style={styles.headerText}>Cancel</UIText>
      </TouchableOpacity>
    </View>
  );
  return (
    <Modal transparent visible={visible} animationType={'slide'}>
      <Animated.View style={[styles.modal]}>
        <SafeAreaView style={styles.bottomArea}>
          <Header />
          <KeyboardAvoidingViewUI {...{customStyleScrollView}}>
            {children}
          </KeyboardAvoidingViewUI>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    marginLeft: '1%',
    marginRight: '1%',
    position: 'absolute',
    bottom: 0,
    width: '98%',
    height: '75%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 24,
    zIndex: 24,
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
  bottomArea: {
    height: '100%',
    justifyContent: 'center',
  },
});
