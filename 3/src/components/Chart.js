import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default function(props) {
  return (
    <Sparklines width={180} height={120} data={props.data}>
      <SparklinesLine color={(props.color)? props.color: "red"}/>
    </Sparklines>
  );
}
