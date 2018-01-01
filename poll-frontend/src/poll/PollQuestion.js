import React from "react";
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


export default function PollQuestion(props) {
  const poll = props.poll;
  const c = poll.choices.reverse()

  const choices = c.map((choice) =>
    <RadioButton
      key={choice.id}
      value={choice.id}
      label={choice.text}
      onClick={props.handleChoice}
      style={{ marginBottom: 16, maxWidth: 600, wordWrap: "break-word" }}
    />
  );

  return (
    <Card style={{ margin: 20 }}>
      <CardTitle
        title={poll.text}
        style={{ wordWrap: "break-word" }}
      />
      <CardActions>
        <RadioButtonGroup name="choices">
          {choices}
        </RadioButtonGroup>
      </CardActions>
    </Card>
  );
}
