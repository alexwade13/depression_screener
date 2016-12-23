import React, {PropTypes, Component} from 'react';

class Score extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["Little interest or pleasure in doing things?","Feeling down, depressed, or hopeless?","Trouble falling or staying asleep, or sleeping too much?","Feeling tired or having little energy?", "Poor appetite or overeating?","Feeling bad about yourself - or that you are a failure or have let yourself or your family down?","Trouble concentrating on things, such as reading the newspaper or watching television?", "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" ,"Thoughts that you would be better off dead, or of hurting yourself in some way?"]
    };
    
  }

  render() {
    console.log(this.props)
    var className = "doctorsHide"
    if(this.props.score > 10){
      className = "doctorsShow"
    }
    return (
      <div className={"container"}>
        <div>
          Score:{this.props.score}
        </div>
        Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
        <div className={className}>
          You may have moderate to severe depression, consider calling one of these therapists: Joe Shmoe -- 555-555-5555, Sally Smith-- 555-555-5555, Leslie Lamposki -- 555-555-5555
        </div>
      </div>
    );
  }
};



export default Score;
