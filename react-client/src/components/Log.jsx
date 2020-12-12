import React from 'react';
import LogItem from './LogItem.jsx';

const Log = (props) => (
  <div>
    <h3 id="table-headers"> Current Week Overview: </h3>
    <table>
      <thead>
        <tr>
          <th>Description</th><th>Amount</th><th>Current Week</th>
        </tr>
      </thead>
      <tbody>
        {props.currentWeekLog.map((stat) => <LogItem key={stat.description} stat={stat} weeklyBudget={props.budgetSettings[stat.description]} overUnder={props.budgetSettings[stat.description] - stat['SUM(amount)']}/>)}
      </tbody>
    </table>
  </div>
);

export default Log;
