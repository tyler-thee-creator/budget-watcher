import React from 'react';

const LogItem = (props) => (
  <tr>
    <td>{props.stat.description}</td><td>{'$' + props.stat['SUM(amount)']}</td>
  </tr>
);

export default LogItem;