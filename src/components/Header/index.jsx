import React from 'react';
import styles from './Header.module.scss';
import cx from 'classnames';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className={cx(styles.container)}>
      <Link to='/'>
        <img src='/static/images/logo.png' alt='logo' />
      </Link>

      {props.children}
    </div>
  );
};

export default Header;
