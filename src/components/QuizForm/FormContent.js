import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Select from '../Select/Select';

export default function FormContent({
  handleQuestionsNumber,
  handleCategory,
  categoriesData,
  getDifficulties,
  showQuestionCard,
  showWelcomePage,
}) {
  return (
    <form className='form'>
      <p>
        <Label txt='Number of Questions: ' />
        <br />
        <Input type='number' method={handleQuestionsNumber} defaultValue={10} />
      </p>

      <p>
        <Label txt='Category: ' />
        <br />
        <Select txt='Category' method={handleCategory} tab={categoriesData} />
      </p>

      <p>
        <Label txt='Difficulty: ' />
        <br />
        <Select
          txt='Difficulty'
          method={getDifficulties}
          tab={[{ name: 'easy' }, { name: 'medium' }, { name: 'hard' }]}
        />
      </p>

      <p>
        <Button
          onClick={showQuestionCard}
          className='form-button'
          txt='START'
          type='button'
        />
        <Button
          onClick={showWelcomePage}
          className='form-button'
          txt='MENU'
          type='button'
        />
      </p>
    </form>
  );
}

FormContent.defaultProps = {
  handleQuestionsNumber: () => {},
  handleCategory: () => {},
  categoriesData: [{}],
  getDifficulties: () => {},
  showQuestionCard: () => {},
  showWelcomePage: () => {},
};

FormContent.propTypes = {
  handleQuestionsNumber: PropTypes.func,
  handleCategory: PropTypes.func,
  categoriesData: PropTypes.arrayOf(PropTypes.object),
  getDifficulties: PropTypes.func,
  showQuestionCard: PropTypes.func,
  showWelcomePage: PropTypes.func,
};
