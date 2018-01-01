import React from "react";
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


export default class PollQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedChoice: null };

    this.styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
      },
    };
  }

  render() {
    const poll = this.props.poll;

    const choices = poll.choices.map((choice) =>
      <RadioButton
        value={choice.id}
        label={choice.text}
        onClick={this.props.handleChoice}
        style={{ marginBottom: 16, maxWidth: 250 }}
      />
    );

    return (
      <Card style={{ margin: 20 }}>
        <CardHeader
          title={poll.text}
        />
        <CardActions>
          <RadioButtonGroup name="choices">
            {choices}
          </RadioButtonGroup>
        </CardActions>
      </Card>
    );
  }
}
