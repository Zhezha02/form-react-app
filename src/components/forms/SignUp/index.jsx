import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP_SCHEMA } from '../../../utils/validationSchemas';
import Input from '../Input';
import RadioGroup from '../RadioGroup';
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
  //Cтили для радио поля !!!!!!!!

  // const inputCreative = (
  //   <>
  //     <h1 className={styles.radioHeader}>
  //       Join As a Creative or Marketplace Seller
  //     </h1>
  //     <p className={styles.radioSubHeader}>
  //       I plan to submit name ideas, Logo designs or sell names in Domain
  //       Marketplace.
  //     </p>
  //   </>
  // );

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
            <RadioGroup
              name='userRole'
              inputs={[
                {
                  value: 'buyer',
                  title: 'Join As a Buyer',
                  description:
                    'I am looking for a Name, Logo or Tagline for my business, brand or product.',
                },
                {
                  value: 'creative',
                  title: 'Join As a Creative or Marketplace Seller',
                  description:
                    'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
                },
              ]}
              className={styles.radioGroup}
            />
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
