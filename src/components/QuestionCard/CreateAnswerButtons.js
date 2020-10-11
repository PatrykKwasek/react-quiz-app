import React from 'react';

import PropTypes from 'prop-types';

const CreateAnswerButtons = ({ id, method, className, item }) => {
  return (
    <button id={id} onClick={e => method(e, id)} className={className}>
      {item}
    </button>
  );
};

export default CreateAnswerButtons;

CreateAnswerButtons.propTypes = {
  id: PropTypes.string,
  method: PropTypes.func,
  className: PropTypes.string,
  item: PropTypes.string,
};
