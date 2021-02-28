import React from 'react';
import cx from 'classnames';
import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
const Input = ({ name, type, ...restOfProps }) => {
  return (
    <label className={styles.wrapper}>
      <Field name={name}>
        {({ field, meta }) => {
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });
          return (
            <input
              type={type}
              {...field}
              className={classNames}
              {...restOfProps}
            />
          );
        }}
      </Field>
      <ErrorMessage className={styles.errorMessage} name={name} component='span' />
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
};
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default Input;
