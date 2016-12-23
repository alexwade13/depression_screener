import * as types from '../actions/action-types';

export default (state = [0,0,0,0,0,0,0,0,0], action) => {
  switch (action.type) {
    case types.ADD_QUESTION_VALUE:
      
      state[action.question.index] = action.question.value
      console.log(state,"SATE", action);
      return [...state];
    default:
      return state;
  }
};
