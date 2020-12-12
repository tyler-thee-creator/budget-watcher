import React from 'react';

const LogItem = (props) => (
  <tr>
    <td>{props.stat.description}</td><td>{'$' + props.stat['SUM(amount)']}</td><td id={'stat' + (props.overUnder > 0 ? '-p' : (props.overUnder <= 0 ? '-n': '-'))}>{props.overUnder ? (props.overUnder < 0 ? '$' + Math.abs(props.overUnder) + ' over' : '$' + props.overUnder + ' left') : (props.overUnder === 0 ? '$' + props.overUnder + ' left' : '-')}</td>
  </tr>
);

export default LogItem;