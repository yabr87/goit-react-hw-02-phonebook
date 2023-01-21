import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, type, btnid }) => {
  return (
    <button type={type} className={s.btn} data-btnid={btnid}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Button;
