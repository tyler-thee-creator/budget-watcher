import React from 'react';

const LogItem = (props) => (
  <tr>
    <td>{props.stat.description}</td><td>{'$' + props.stat['SUM(amount)']}</td><td>
      {/* {props.budgetSettings.map(item => {
        if(item.description === props.stats.description) {
          return item.amount
        }
      });} */}
      </td>
  </tr>
);

export default LogItem;