import React from "react";
import PollQuestion from "./PollQuestion";
import PollResult from "./PollResult";
import { VoteChoice } from "../actions.js";

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
    return VoteChoice(e.target.value)
      .then((response) => {
        this.setState({
          poll: response,
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
