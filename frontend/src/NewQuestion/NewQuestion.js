import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class NewQuestion extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        disabled: false, // disable the form on submit
        title: '', // title of question
        description: '', // description of question
      };
    }
    
    // func to update the description as it is entered
    updateDescription(value) {
      this.setState({
        description: value,
      });
    }
  
    // func to update the title as it is entered
    updateTitle(value) {
      this.setState({
        title: value,
      });
    }
  
    // function to disable the form and post the new question details before navigating back to the root
    async submit() {
      this.setState({
        disabled: true,
      });
  
      await axios.post('http://localhost:8081', {
        title: this.state.title,
        description: this.state.description,
      },
      );
  
      this.props.history.push('/');
    }
  
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-primary">
                <div className="card-header">New Question</div>
                <div className="card-body text-left">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title:</label>
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      onBlur={(e) => {this.updateTitle(e.target.value)}}
                      className="form-control"
                      placeholder="Give your question a title."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Description:</label>
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      onBlur={(e) => {this.updateDescription(e.target.value)}}
                      className="form-control"
                      placeholder="Give more context to your question."
                    />
                  </div>
                  <button
                    disabled={this.state.disabled}
                    className="btn btn-primary"
                    onClick={() => {this.submit()}}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default withRouter(NewQuestion);