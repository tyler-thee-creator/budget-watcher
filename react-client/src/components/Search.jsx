import React from 'react';

const Search = (props) => (
  <div>
    <h4>Log a spend:</h4>
    <form id="log">
      <p>
        <label htmlFor="description">Description: </label>
        <input type="text" id="description" onKeyPress={props.updateDescription}></input>
      </p>
      <p>
        <label htmlFor="amount">Amount: </label>
        <input type="number" id="amount" onKeyPress={props.updateAmount}></input>
      </p>
      <p>
        <input type="submit"></input>
      </p>
    </form>
  </div>
);

export default Search;