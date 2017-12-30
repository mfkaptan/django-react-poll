import React from "react";

export default class PollQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: null };
  }

  render() {
    const poll = this.props.poll;

    const choices = poll.choices.map((choice) =>
      <div className="radio">
        <label>
          <input type="radio" value={choice.id} onChange={this.props.handleChoice}
            checked={false} />

          {choice.text}
        </label>
      </div>
    );

    return (
      <div>
        <h2> {poll.text} </h2>

        <form>
          {choices}
        </form>
      </div>
    );
  }
}
