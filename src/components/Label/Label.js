import React from 'react';

import PropTypes from 'prop-types';

export default function Label({ txt }) {
  return <label className='form-label'>{txt}</label>;
}

Label.defaultProps = {
  txt: '',
};

Label.propTypes = {
  txt: PropTypes.string,
};
