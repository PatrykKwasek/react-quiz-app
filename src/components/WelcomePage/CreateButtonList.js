import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

export default function CreateButtonList({ tab, onClick }) {
  return (
    <div className='welcome-page-buttons-list'>
      {tab.map((item, index) => (
        <p key={`Answers list-${index}`} className='txt-inside-btn'>
          <Button
            onClick={onClick}
            className='btn'
            txt={item.button}
            type='button'
          />
        </p>
      ))}
    </div>
  );
}

CreateButtonList.defaultProps = {
  tab: [{}],
  onClick: () => {},
};

CreateButtonList.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
