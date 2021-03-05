import * as Yup from 'yup';
import * as validation from '../constants/validation.js';

export const NAME_SCHEMA = Yup.string().matches(
  /^[A-Z][a-z]{1,64}$/,
  'Name must be a valid name'
);

export const EMAIL_SCHEMA = Yup.string()
  .email('Email must be a valid email')
  .required('Email is required');

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    'Password must contain at least 8 characters including a number, a lowercase and a uppercase letters and special characters'
  )
  .required('Password is required');

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: Yup.string().required('Password is required'),
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA.required('First name is required'),
  lastName: NAME_SCHEMA.required('Last name is required'),
  displayName: Yup.string()
    .matches(
      /^[\w#?!@$%^&*-]{4,32}$/,
      'Display name must be a valid display name'
    )
    .required('Display name is required'),
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
  userRole: Yup.string()
    .oneOf(validation.SIGN_UP_RADIO_GROUP)
    .required('A radio option is required'),
});
