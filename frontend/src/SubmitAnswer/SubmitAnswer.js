import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

class SubmitAnswer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        answer: '',
      };
    }
  
    // func to update the answer as it is typed
    updateAnswer(value) {
      this.setState({
        answer: value,
      });
    }
  
    // handler function to initiate the post to the api with the new answer
    submit() {
      this.props.submitAnswer(this.state.answer);
      this.setState({
        answer: '',
      });
    }
  
    render() {
      return (
        <Fragment>
          <div className="form-group text-center">
            <label htmlFor="exampleInputEmail1">Answer:</label>
            <input
              type="text"
              onChange={(e) => {this.updateAnswer(e.target.value)}}
              className="form-control"
              placeholder="Share your answer."
              value={this.state.answer}
            />
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {this.props.deleteQuestion()}}>
            Delete
          </button>
          <button
            className="btn btn-primary float-sm-right"
            onClick={() => {this.submit()}}>
            Submit
          </button>
          <hr className="my-4" />
        </Fragment>
      )
    }
  }
  
  export default withRouter(SubmitAnswer);