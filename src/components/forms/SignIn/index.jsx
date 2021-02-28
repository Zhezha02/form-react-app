import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SIGN_IN_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import styles from './SignInForm.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const SignInForm = props => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {() => {
        return (
          <Form className={styles.container}>
            <Input name='email' placeholder='Email address' />
            <Input name='password' type='password' placeholder='Password' />
            <Field className={styles.logInBtn} type='submit' value='LOGIN' />
          </Form>
        );
      }}
    </Formik>
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SignInForm;
