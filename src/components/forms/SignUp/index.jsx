import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
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

            {/* <label>
              <Field type='radio' name='joinAs' value='buyer' />
              <h1>Join As a Buyer</h1>
              <p>
                I am looking for a Name, Logo or Tagline for my business, brand
                or product.
              </p>
            </label>
            <label>
              <Field type='radio' name='joinAs' value='creative' />
              <h1>Join As a Creative or Marketplace Seller</h1>
              <p>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </p>
            </label> */}
            <Field
              className={styles.signUpBtn}
              type='submit'
              value='Create account'
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
