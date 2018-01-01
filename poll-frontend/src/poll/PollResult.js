import React from "react";
import { Card, CardText, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';


export default class PollResult extends React.Component {
  render() {
    const poll = this.props.poll;
    console.log(this.props.poll)
    const results = poll.choices.map((choice) =>
      <ListItem primaryText={choice.text} badge={choice.votes} />
    );

    return (
      <Card style={{ margin: 20 }}>
        <CardHeader
          title={poll.text}
        />
        <CardText>
          <List>
            {results}
          </List>
        </CardText>
      </Card>
    );
  }
}
