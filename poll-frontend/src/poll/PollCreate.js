import React from "react";

export default class PollCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
    this.state = {
      "text": "",
      "choices": [{"text": ""}, {"text": ""}, {"text": ""}]
    }
  }

  handleQuestionChange(e) {
    this.setState({"text": e.target.value})
  }

  handleChoiceChange(c, e) {
    const val = e.target.value;
    this.setState((prevState) => {
      prevState.choices[c - 1]["text"] = val;
      return {"choices": prevState.choices}
    });
  }

  handleCreate(e) {
    e.preventDefault();
    this.props.onPollCreate(this.state);
  }

  render() {
    let choices = []
    for (let i = 1; i <= 3; i++) {
      choices.push((
        <label>
          Choice {i}:
          <input type="text" name={"choice"+i} id={"choice"+i} onChange={(e) => this.handleChoiceChange(i , e)} />
         </label>
      ))
    }
    return (
      <div>
        <form>
          <label>
            Question:
            <input type="text" name="question" id="question" onChange={this.handleQuestionChange} />
          </label>

          {choices}
          <button onClick={this.handleCreate}>+ Add new poll </button>
        </form>
      </div>
    );
  }
}
