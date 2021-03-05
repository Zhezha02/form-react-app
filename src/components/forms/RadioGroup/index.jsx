import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import styles from './RadioGroup.module.scss';
import cx from 'classnames';
import RadioField from './RadioField';

const createRadioInputs = (name, inputs) =>
  inputs.map(input => <RadioField name={name} {...input} />);

const RadioGroup = props => {
  const { name, inputs, className } = props;
  console.log('!!!!1', inputs);
  const labelClassNames = cx(styles.radioBtnContainer, className);

  return (
    <label className={labelClassNames}>
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
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
};

export default RadioGroup;
