import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Name must be a valid name')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Test check for email')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Password must contain 8 char and so on...'
  )
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string()
    .matches(/^[\w#?!@$%^&*-]{4,32}$/)
    .required(),
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
});
