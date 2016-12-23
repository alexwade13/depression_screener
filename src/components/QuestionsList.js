import React, {PropTypes} from 'react';
import Question from './Question';

const QuestionsList = ({questions, addQuestionValue}) => {

  return (
    <div>
      {questions.map((question,i) => 
        <Question key={i} index ={i} question={question} addQuestionValue={addQuestionValue} />  
      )}
    </div>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.array.isRequired
};

export default QuestionsList;
