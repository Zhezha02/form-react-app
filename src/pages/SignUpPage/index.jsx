import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SignUpForm from '../../components/forms/SignUp';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <Header link={{ path: '/', description: 'SignIn' }} />
      <h1 className={styles.heading}>Create an account</h1>
      <h2>We always keep yout name and email address private</h2>
      <SignUpForm/>
    </div>
  );
};

// SignUpPage.propTypes = {};

export default SignUpPage;






