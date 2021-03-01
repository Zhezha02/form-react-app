import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignUpForm.module.scss';

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  userRole: '',
};

const SignUpForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {() => {
        return (
          <Form className={styles.container}>
            <Input name='firstName' placeholder='First name' />
            <Input name='lastName' placeholder='Last name' />
            <Input name='displayName' placeholder='Display name' />
            <Input name='email' placeholder='Email address' />
            <Input name='password' type='password' placeholder='Password' />
            <Input
              name='passwordConfirmation'
              type='password'
              placeholder='Password Confirmation'
            />
            <div className={styles.radioBtnContainer}>
              <label className={styles.radioLabel}>
                <Field
                  className={styles.radioBtn}
                  type='radio'
                  name='userRole'
                  value='buyer'
                />
                <h1 className={styles.radioHeader}>Join As a Buyer</h1>
                <p className={styles.radioSubHeader}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </p>
              </label>
              <label className={styles.radioLabel}>
                <Field
                  className={styles.radioBtn}
                  type='radio'
                  name='userRole'
                  value='creative'
                />

                <h1 className={styles.radioHeader}>
                  Join As a Creative or Marketplace Seller
                </h1>
                <p className={styles.radioSubHeader}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              <ErrorMessage
                name='userRole'
                className={styles.errorMessage}
                component='span'
              />
              </label>
            </div>

            <Field
              className={styles.signUpBtn}
              type='submit'
              value='Create account'
              name='submit'
            />
          </Form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SignUpForm;
