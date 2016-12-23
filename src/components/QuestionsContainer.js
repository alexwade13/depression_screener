import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as questionsActions from '../actions/questions-actions';
import QuestionsList from './QuestionsList';
import Score from './Score';

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ["Little interest or pleasure in doing things?","Feeling down, depressed, or hopeless?","Trouble falling or staying asleep, or sleeping too much?","Feeling tired or having little energy?", "Poor appetite or overeating?","Feeling bad about yourself - or that you are a failure or have let yourself or your family down?","Trouble concentrating on things, such as reading the newspaper or watching television?", "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" ,"Thoughts that you would be better off dead, or of hurting yourself in some way?"]
    };
  }

  render() {
    const {questions} = this.state;
    const {values} = this.props
    var value = 0
    for (var i in values){
      value += parseInt(values[i])
    }
    console.log(this.props,value,values,"VALUE")

    return (
      <div>
        <QuestionsList questions={questions} addQuestionValue={this.props.actions.addQuestionValue} />
        <Score score={value}/>
      </div>
    );
  }
}

QuestionsContainer.propTypes = {
  values: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  console.log(state,props,"mapstate to props")
  return {
    values: state.values
  };
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators(questionsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer);
