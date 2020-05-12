import {object, string, ref} from 'yup';

export type TInitialState = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export function initialState(showSignupFields: boolean): TInitialState {
  let baseInitialState: TInitialState = {
    email: '',
    password: '',
  };
  if (showSignupFields) {
    baseInitialState = {
      ...baseInitialState,
      confirmPassword: '',
    };
  }
  return baseInitialState;
}

export function validationSchemaYup(showSignupFields: boolean) {
  let baseValidation = {
    email: string()
      .email('Please enter a valid email')
      .required('Please enter a email'),
    password: string().required('Password is required'),
  };

  const showSignupFieldsValidation = {
    confirmPassword: string().oneOf([ref('password'), null], 'Passwords must match'),
  };

  return object().shape(
    showSignupFields
      ? {
          ...baseValidation,
          ...showSignupFieldsValidation,
        }
      : baseValidation,
  );
}
