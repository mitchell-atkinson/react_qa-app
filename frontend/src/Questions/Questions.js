import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: null,
        };
    }

    async componentDidMount() {
        const questions = (await axios.get('http://localhost:8081')).data;
        this.setState({
            questions,
        });
    }

    render() {
        return (
            <div className="container">
              <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-3">
                  <div className="card text-white bg-secondary mb-3">
                    <div className="card-body">
                      <h4 className="card-title">Have a question?</h4>
                      <p className="card-text">Get an answer from the community within a matter of minutes.</p>
                      <Link to="/new-question" className="btn btn-primary float-sm-right">Ask</Link>
                    </div>
                  </div>
              </div>
              {this.state.questions === null && <p>Loading questions...</p>}
              {
                this.state.questions && this.state.questions.map(question => (
                  <div key={question.id} className="col-sm-12 col-md-4 col-lg-3 question">
                      <div className={"card text-white mb-3 " + (question.answers > 0 ? 'bg-success' : 'bg-info')}>
                        <div className="card-body">
                          <h4 className="card-title">{question.title}</h4>
                          <p className="card-text">{question.description}</p>
                        </div>
                        <div class="card-footer">
                          <small>Answers: {question.answers}</small><Link to={`/question/${question.id}`} className="btn btn-primary float-sm-right">{(question.answers > 0 ? 'View' : 'Answer')}</Link>
                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
    }
}

export default Questions;