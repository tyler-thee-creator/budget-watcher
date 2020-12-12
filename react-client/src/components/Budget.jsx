import React from 'react';

const Budget = (props) => (
  <div>
    <h3>Current Budget</h3>
    <button id="addbudgetitem">Add a budget item</button>
    <table>
      <thead>
        <tr>
          <th>Description</th><th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fake data</td><td>Fake data</td>
        </tr>
      </tbody>
    </table>
    <button id="resetbudget">Reset budget</button>
  </div>
);

export default Budget;