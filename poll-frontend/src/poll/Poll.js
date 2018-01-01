import React from "react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";

export default class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.handleChoice = this.handleChoice.bind(this);
    this.state = {
      poll: props.poll,
      choiceSelected: false
    }
  }

  handleChoice(e) {
    e.preventDefault();
    return fetch('http://localhost:8000/api/v1/choices/' + e.target.value + "/vote/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        console.log(this.state)
        this.setState({
          poll: responseJson,
          choiceSelected: true
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const poll = this.state.poll;

    return (
      <div>
        {this.state.choiceSelected
          ? <PollResult poll={poll} />
          : <PollQuestion poll={poll} handleChoice={this.handleChoice} />
        }
      </div>
    );
  }
}
