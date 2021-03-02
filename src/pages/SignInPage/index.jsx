import React from 'react';
import SignInForm from '../../components/forms/SignIn';
// import PropTypes from 'prop-types';
import Header from '../../components/Header';
import styles from './SignInPage.module.scss';
import { Link } from 'react-router-dom';


const SignInPage = () => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <Header>
        <Link to='/sign-up' className={styles.btnToLogin}>
          SignUp
        </Link>
      </Header>
      <h1 className={styles.heading}>Login to your Account</h1>
      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

// SignInPage.propTypes = {};

export default SignInPage;
