import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import cx from 'classnames';
import logo from './logo.png';

const Header = props => {
  const {
    link: { path, description },
  } = props;
  return (
    <div className={cx(styles.container) }>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      
      <Link to={path} className={styles.link}>
        {description}
      </Link>
    </div>
  );
};

Header.defaultProps = {
  link: { path: '/', description: 'Home' },
};
Header.propTypes = {
  link: PropTypes.objectOf(PropTypes.string),
};

export default Header;
