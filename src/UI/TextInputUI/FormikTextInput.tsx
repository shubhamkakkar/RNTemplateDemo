import {useField} from 'formik';
import React from 'react';
import FormikError from '../FormikError/FormikError';
import TextInputUI, {TTextInputUI} from './TextInputUI';
interface TFormikTextInput extends TTextInputUI {
  fieldName: string;
}

export default function FormikTextInput({fieldName, texInputProps, ...rest}: TFormikTextInput) {
  const [field, meta] = useField(fieldName);
  return (
    <TextInputUI
      {...rest}
      texInputProps={{
        ...texInputProps,
        onBlur: field.onBlur(fieldName),
      }}>
      <FormikError {...{meta}} />
    </TextInputUI>
  );
}
