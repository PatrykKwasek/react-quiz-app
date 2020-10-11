import React from 'react';

import PropTypes from 'prop-types';

export default function Select({ txt, method, tab }) {
  return (
    <select onChange={method} className='form-select'>
      <option value={0}>Any {txt}</option>
      {tab.map((item, index) => (
        <option key={`Create option-${index}`} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  txt: '',
  method: () => {},
  tab: [],
};

Select.propTypes = {
  txt: PropTypes.string,
  method: PropTypes.func,
  tab: PropTypes.arrayOf(PropTypes.object),
};
