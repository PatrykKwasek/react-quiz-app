import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

export default function AnswersList({ questionsTable, buttonClicked, method }) {
  return questionsTable.map((item, index) => {
    const id = `button${index + 1}`;
    const className =
      buttonClicked === id ? 'clicked-button' : 'inactive-button';

    return (
      <p key={`Answers list-${index}`} className='answers-paragraph'>
        <Button
          id={id}
          onClick={e => method(e, id)}
          className={className}
          txt={item}
        />
      </p>
    );
  });
}

AnswersList.defaultProps = {
  // questionsTable: [{}],
  buttonClicked: '',
  method: () => {},
};

AnswersList.propTypes = {
  questionsTable: PropTypes.array,
  buttonClicked: PropTypes.string,
  method: PropTypes.func,
};
