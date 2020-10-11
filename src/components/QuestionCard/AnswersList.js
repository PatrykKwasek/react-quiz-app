import React from 'react';

import PropTypes from 'prop-types';

import CreateAnswerButtons from './CreateAnswerButtons';

export default function AnswersList({ questionsTable, buttonClicked, method }) {
  return questionsTable.map((item, index) => {
    const id = `button${index + 1}`;
    const className =
      buttonClicked === id ? 'clicked-button' : 'inactive-button';

    return (
      <p key={`Answers list-${index}`} className='answers-paragraph'>
        <CreateAnswerButtons
          id={id}
          method={method}
          className={className}
          item={item}
        />
      </p>
    );
  });
}

AnswersList.defaultProps = {
  questionsTable: [''],
  buttonClicked: '',
  method: () => {},
};

AnswersList.propTypes = {
  questionsTable: PropTypes.arrayOf(PropTypes.string),
  buttonClicked: PropTypes.string,
  method: PropTypes.func,
};
