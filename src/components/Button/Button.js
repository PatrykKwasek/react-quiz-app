import React from 'react';

import PropTypes from 'prop-types';

export default function Button({ type, onClick, className, txt, condition }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={condition}
    >
      {txt}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  txt: PropTypes.string,
  condition: PropTypes.bool,
  type: PropTypes.string,
};
