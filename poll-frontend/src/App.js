import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

import PollCreate from './poll/PollCreate';
import PollList from './poll/PollList';
import { GetAllQuestions, PostQuestion } from './actions'
import './assets/css/App.css';

const style = {
  height: "100%",
  width: 800,
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
    return this.getAllQuestions();
  }

  getAllQuestions() {
    return GetAllQuestions()
      .then((response) => {
        this.setState({
          isLoading: false,
          polls: response
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handlePollCreate(poll) {
    console.log(poll)
    PostQuestion(poll)
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
            <PollCreate onPollCreate={this.handlePollCreate} />
            {pollList}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
