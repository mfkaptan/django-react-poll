import React from "react";

import Poll from './Poll';


export default function PollList(props) {
  const polls = props.polls;

  const pollList = polls.map((p) =>
    <Poll poll={p}/>
  );

  return (
    <div>
      {pollList}
    </div>
  );
}
