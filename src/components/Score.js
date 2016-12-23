import React, {PropTypes, Component} from 'react';

class Score extends Component  {
  constructor(props) {
    super(props);
    
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
