import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import SignUpForm from '../../components/forms/SignUp';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header link={{ path: '/', description: 'Login' }} />
      <h1 className={styles.heading}>Create an account</h1>
      <h2 className={styles.subHeading}>We always keep yout name and email address private</h2>
      <SignUpForm onSubmit={onSubmit}/>
      <p className={styles.content}>
        By clicking this button, you agree to our <a className={styles.link} href='https://www.squadhelp.com/Terms&Conditions'>Terms of Service.</a>
      </p>
    </div>
  );
};

// SignUpPage.propTypes = {};

export default SignUpPage;
