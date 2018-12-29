import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Answers extends Component {
    constructor(props){ 
        super(props);
    }

    render() {
        return (
            this.props.submittedAnswers.map((answer, idx) => (
                <p onClick={() =>this.props.deleteAnswer(idx)} className="lead" key={idx}>{answer.answer}</p>
              ))
        );
    }
}

export default withRouter(Answers)