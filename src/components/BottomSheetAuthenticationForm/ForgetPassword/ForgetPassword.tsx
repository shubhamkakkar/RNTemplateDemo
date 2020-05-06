import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UIText} from '../../../UI';
import {StateContextForgetPassword} from './stateContext';

export default function ForgetPassword() {
  const {visible, toggleVisible} = useContext(StateContextForgetPassword);
  return (
    <TouchableOpacity onPress={toggleVisible}>
      <UIText>Forgot Password</UIText>
    </TouchableOpacity>
  );
}
