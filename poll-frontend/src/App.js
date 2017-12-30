import React, { Component } from 'react';
import PollList from './poll/PollList';
import PollCreate from './poll/PollCreate';
import './assets/css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handlePollCreate = this.handlePollCreate.bind(this);
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.api = 'http://localhost:8000/api/v1/';

    this.state = {
      isLoading: true,
      polls: []
    }
  }

  componentDidMount() {
    console.log("Mounted")
    return this.getAllQuestions();
  }

  getAllQuestions() {
    return fetch('http://localhost:8000/api/v1/polls/')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          polls: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  postQuestion(question) {
    return fetch(this.api + 'polls/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question)
    })
  }

  handlePollCreate(poll) {
    console.log(poll)
    this.postQuestion(poll)
      .then(this.getAllQuestions)
  }

  render() {
    let pollList;

    if (this.state.isLoading) {
      pollList = (<div> Loading... </div>);
    } else {
      pollList = (<PollList polls={this.state.polls} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Poll</h1>
        </header>
        {pollList}
        <PollCreate onPollCreate={this.handlePollCreate} />
      </div>
    );
  }
}

export default App;
