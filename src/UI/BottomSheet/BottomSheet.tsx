import React, {ReactNode} from 'react';
import {
  Modal,
  SafeAreaView,
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
  const Header = () => (
    <View style={styles.header}>
      <FView>
        <UIText style={styles.headerText}>{headerTitle}</UIText>
      </FView>
      {!!alwaysOpen ? null : (
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <UIText style={styles.headerText}>Cancel</UIText>
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <Modal transparent visible={visible} animationType={'slide'}>
      <View style={[styles.modal, {height: customHeightInPercentage || '75%'}]}>
        <SafeAreaView style={styles.bottomArea}>
          <Header />
          <KeyboardAvoidingViewUI {...{customStyleScrollView}}>
            {children}
          </KeyboardAvoidingViewUI>
        </SafeAreaView>
      </View>
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
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
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
