import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

// Component to display the answers associated with a question
class Answers extends Component {
    render() {
        return (
            this.props.submittedAnswers.map((answer, idx) => (
                <p onClick={() =>this.props.deleteAnswer(idx)} className="lead" key={idx}>{answer.answer}</p>
              ))
        );
    }
}

export default withRouter(Answers)