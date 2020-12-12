import React from 'react';
import LogItem from './LogItem.jsx';

const Log = (props) => (
  <div>
    <h3 id="table-headers"> Current Week Overview: </h3>
    <table>
      <thead>
        <tr>
          <th>Description</th><th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {props.currentWeekLog.map(stat => <LogItem key={stat.description} stat={stat} budgetSettings={props.budgetSettings}/>)}
      </tbody>
    </table>
  </div>
);

export default Log;
