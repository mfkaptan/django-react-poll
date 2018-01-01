import React from "react";
import { Card, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Badge from 'material-ui/Badge';


export default function PollResult(props) {
  const poll = props.poll;
  const choices = props.poll.choices.reverse();

  const results = choices.map((choice) =>
    <ListItem key={choice.id} primaryText={choice.text} badge={choice.votes}
      rightIconButton={<Badge badgeContent={choice.votes} primary={true}
      style={{ maxWidth: 600, wordWrap: "break-word" }} />} />
  );

  return (
    <Card style={{ margin: 20 }}>
      <CardTitle
        style={{ wordWrap: "break-word" }}
        title={poll.text}
        subtitle="Results"
      />
      <CardText>
        <List>
          {results}
        </List>
      </CardText>
    </Card>
  );
}
