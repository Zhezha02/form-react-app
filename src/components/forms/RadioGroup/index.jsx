import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import styles from './RadioGroup.module.scss';
import cx from 'classnames';

const RadioGroup = props => {
  const createRadioInputs = (name, inputs) => {
    const radioInputsArray = inputs.map(({ value, children }) => {
      return (
        <label className={styles.radioLabel}>
          <Field
            className={styles.radioBtn}
            type='radio'
            name={name}
            value={value}
          />
          {children}
        </label>
      );
    });
    return radioInputsArray;
  };
  const { name, inputs, className } = props;
  return (
    <label className={cx(styles.radioBtnContainer, className)}>
      {createRadioInputs(name, inputs)}
      <ErrorMessage
        name={name}
        className={styles.errorMessage}
        component='span'
      />
      {props.children}
    </label>
  );
};

RadioGroup.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      children: PropTypes.object,
    })
  ),
  name: PropTypes.string.isRequired,
};

export default RadioGroup;