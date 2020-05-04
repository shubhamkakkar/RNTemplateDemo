import React from 'react';
import {FView, TextInputUI} from '../../../UI';
import {useStringState} from '../../../customHooks';

export default function AuthenticationFormFields() {
  const [email, setEmail] = useStringState();
  return (
    <FView>
      <TextInputUI
        {...{
          value: email,
          onChangeText: setEmail,
          baseHeadingProps: {
            title: 'Email',
          },
        }}
      />
    </FView>
  );
}
