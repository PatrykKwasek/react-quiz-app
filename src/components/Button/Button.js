import React from 'react';

import PropTypes from 'prop-types';

export default function Button({
  type,
  id,
  onClick,
  className,
  txt,
  condition,
}) {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={className}
      disabled={condition}
    >
      {txt}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  className: '',
  txt: '',
  condition: false,
  type: 'button',
  id: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  txt: PropTypes.string,
  condition: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
};
