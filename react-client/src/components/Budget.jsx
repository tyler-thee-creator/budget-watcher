import React from 'react';

const Budget = (props) => (
  <div>
    <h3 id="table-headers">Current Budget:</h3>
    <table>
      <thead>
        <tr>
          <th>Description</th><th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.budgetSettings).map((key) => {
          return <tr key={key}><td>{key}</td><td>{'$' + props.budgetSettings[key]}</td></tr>
        })}
      </tbody>
    </table>
    <h4>Add a budget item:</h4>
    <form>
      <p>
        <label htmlFor="budgetdescription">Description: </label>
        <input id="budgetdescription" type="text" onChange={props.updateBudgetDescription}></input>
      </p>
      <p>
        <label htmlFor="budgetamount">Amount: </label>
        <input id="budgetamount" type="number" onChange={props.updateBudgetAmount}></input>
      </p>
      <p>
        <input id="submitbudget" type="submit" onClick={props.addBudgetItem}></input>
      </p>
    </form>
    <p>
      <button id="resetbudget" onClick={props.resetBudget}>Reset budget</button>
    </p>
  </div>
);

export default Budget;
