import React from 'react';

import PropTypes from 'prop-types';

export default function Input({ type, name, onChange, defaultValue }) {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue}
      max={50}
      className='form-input'
    />
  );
}

Input.defaultProps = {
  type: '',
  name: '',
  onChange: () => {},
  defaultValue: 10,
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
};
