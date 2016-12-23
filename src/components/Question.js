import React, {PropTypes, Component} from 'react';

class Question extends Component  {
	constructor(props) {
    super(props);
    
    this.onAddQuestionValueClick = this.onAddQuestionValueClick.bind(this);
  }

  onAddQuestionValueClick() {
    
    const select = document.getElementById(this.props.question);
    const value = select.options[select.selectedIndex].value
    this.props.addQuestionValue({
      index:this.props.index,
      value:value
    });

  }
  render() {
	  return (
	    <div className={"container"}>
        <div className={"question"}>
          {this.props.question}
        </div>
	      <select className={"select"} id={this.props.question} onChange={this.onAddQuestionValueClick} size="4">
	      	<option value="0" >Not at all </option>
	      	<option value="1" >Several days </option>
	      	<option value="2" >More than half the days </option>
	      	<option value="3" >Nearly every day </option>
	      </select>
	    </div>
	  );
	}
};

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
