import React from 'react';
import SignInForm from '../../components/forms/SignIn';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import styles from './SignInPage.module.scss';

const SignInPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header link={{ path: '/sign-up', description: 'SignUp' }}  />
      <h1>Login to your Account</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

// SignInPage.propTypes = {};

export default SignInPage;
