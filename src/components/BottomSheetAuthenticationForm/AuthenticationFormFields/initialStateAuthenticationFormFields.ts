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
  const showSignupFieldsValidation = {
    confirmPassword: string().when('password', {
      is: (val: string) => val && val.length > 0,
      then: string()
        .oneOf([ref('password')], 'Both passwords need to be the same')
        .required(),
    }),
  };

  let baseValidation = {
    email: string()
      .email('Please enter a valid email')
      .required('Please enter a email'),
    password: string().required('Password is required'),
  };

  if (showSignupFields) {
    baseValidation = {
      ...baseValidation,
      ...showSignupFieldsValidation,
    };
  }

  return object().shape(baseValidation);
}
