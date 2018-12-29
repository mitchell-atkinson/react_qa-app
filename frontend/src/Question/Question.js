import React, {Component, Fragment} from 'react';
import axios from 'axios';
import SubmitAnswer from '../SubmitAnswer/SubmitAnswer';
import {withRouter} from 'react-router-dom';
import Answers from '../Answers/Answers';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    };

    this.submitAnswer = this.submitAnswer.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  async componentDidMount() {
    await this.refreshQuestion();
  }

  async refreshQuestion() {
    const { match: { params } } = this.props;
    const question = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
    this.setState({
      question,
    });
  }

  async submitAnswer(answer) {
    await axios.post(`http://localhost:8081/answer/${this.state.question.id}`, {
      answer,
    },
    );
    await this.refreshQuestion();
  }

  async deleteQuestion() {
    await axios.post(`http://localhost:8081/delete/${this.state.question.id}`);
    this.props.history.push('/');
  }

  async deleteAnswer(answerId){
    await axios.post(`http://localhost:8081/delete/${this.state.question.id}/comments/${answerId}`);
    await this.refreshQuestion();
  }

  render() {
    const {question} = this.state;
    if (question === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{question.title}</h1>
            <p className="lead">{question.description}</p>
            <hr className="my-4" />
            <SubmitAnswer questionId={question.id} submitAnswer={this.submitAnswer} deleteQuestion={this.deleteQuestion} />
            <p>Answers:</p>
            <Answers submittedAnswers={question.answers} deleteAnswer={this.deleteAnswer}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Question);