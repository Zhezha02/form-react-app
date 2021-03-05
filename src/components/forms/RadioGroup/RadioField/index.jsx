import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import styles from './RadioField.module.scss'

const RadioField = props => {
  const { name, value, title, description } = props;
  return (
    <label className={styles.radioLabel}>
      <Field
        className={styles.radioBtn}
        type='radio'
        name={name}
        value={value}
      />
      <h1 className={styles.radioHeader}> {title}</h1>
      <p className={styles.radioSubHeader}> {description}</p>
    </label>
  );
};

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default RadioField;
