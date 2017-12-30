import React from "react";

export default class PollResult extends React.Component {
  render() {
    const poll = this.props.poll;
    console.log(this.props.poll)
    const results = poll.choices.map((choice) =>
      <li>
        {choice.votes}
      </li>
    );

    return (
      <div>
        <h2> {poll.text} </h2>

        {results}
      </div>
    );
  }
}
