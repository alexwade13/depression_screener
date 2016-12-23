import * as types from './action-types';

export const addQuestionValue = (question) => {
	
  return {
    type: types.ADD_QUESTION_VALUE,
    question
  };
}
