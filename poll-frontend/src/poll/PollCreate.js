import React from "react";

import { Card, CardTitle, CardActions, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
    this.props.onPollCreate(this.state);
    this.setState({
      "text": "",
      "choices": [{ "text": "" }, { "text": "" }, { "text": "" }]
    });
  }

  render() {
    let choices = []
    for (let i = 1; i <= 3; i++) {
      choices.push((
          <TextField key={i} hintText={"Choice " + i} fullWidth={true} id={"choice" + i}
          ref={"choice" + i} value={this.state.choices[i-1].text} onChange={(e) => this.handleChoiceChange(i, e)} />
      ))
    }

    return (
      <Card style={{ margin: 20 }}>
        <CardTitle
          title={<TextField hintText="Type your question: e.g. What is your favorite color?"
          fullWidth={true} ref={"question"} id={"question"}
          value={this.state.text} onChange={this.handleQuestionChange} />}
        />

        <CardText>
          {choices}
        </CardText>

        <CardActions>
          <RaisedButton label="Add new question" primary={true} fullWidth={true}
            onClick={this.handleCreate} />
        </CardActions>
      </Card>
    );
  }
}
