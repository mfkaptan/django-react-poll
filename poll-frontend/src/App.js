import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

import PollCreate from './poll/PollCreate';
import PollList from './poll/PollList';
import './assets/css/App.css';

const style = {
  height: "100%",
  width: 600,
  margin: 40,
  textAlign: 'left',
  display: 'inline-block',
};

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
    return fetch(this.api + "questions/")
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
    return fetch(this.api + 'questions/', {
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
      pollList = (<CircularProgress />);
    } else {
      pollList = (<PollList polls={this.state.polls} />);
    }

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Poll</h1>
          </header>

          <Paper style={style} zDepth={1} >
            {pollList}
          </Paper>
          <PollCreate onPollCreate={this.handlePollCreate} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
