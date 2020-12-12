import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Log from './components/Log.jsx';
import LogEntry from './components/LogEntry.jsx';
import Budget from './components/Budget.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeekLog: [],
      budgetSettings: [],
      formSubmitDescription: '',
      formSubmitAmount: 0,
      formSubmitBudgetDescription: '',
      formSubmitBudgetAmount: 0
    }
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.addLog = this.addLog.bind(this);
    this.deleteMostRecent = this.deleteMostRecent.bind(this);
    this.addBudgetItem = this.addBudgetItem.bind(this);
    this.updateBudgetDescription = this.updateBudgetDescription.bind(this);
    this.updateBudgetAmount = this.updateBudgetAmount.bind(this);
    this.resetBudget = this.resetBudget.bind(this);
  }

  updateDescription(e) {
    this.setState({
      formSubmitDescription: e.target.value
    });
  }

  updateAmount(e) {
    this.setState({
      formSubmitAmount: e.target.value - 0
    });
  }

  updateBudgetDescription(e) {
    this.setState({
      formSubmitBudgetDescription: e.target.value
    });
  }

  updateBudgetAmount(e) {
    this.setState({
      formSubmitBudgetAmount: e.target.value - 0
    });
  }

  addLog(e) {
    $.ajax({
      method: 'POST',
      url: '/log',
      data: {
        description: this.state.formSubmitDescription,
        amount: this.state.formSubmitAmount
      },
      success: (data) => {
        this.setState({
          currentWeekLog: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    e.preventDefault();
  }

  deleteMostRecent() {
    $.ajax({
      method: 'DELETE',
      url: '/log',
      success: (data) => {
        this.setState({
          currentWeekLog: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addBudgetItem(e) {
    $.ajax({
      method: 'POST',
      url: '/budget',
      data: {
        description: this.state.formSubmitBudgetDescription,
        amount: this.state.formSubmitBudgetAmount
      },
      success: (data) => {
        this.setState({
          budgetSettings: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
    e.preventDefault();
  }

  resetBudget() {
    console.log('got here')
    $.ajax({
      method: 'DELETE',
      url: '/budget',
      success: (data) => {
        this.setState({
          budgetSettings: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/currentWeek',
      success: (data) => {
        this.setState({
          currentWeekLog: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });

    $.ajax({
      method: 'GET',
      url: '/budget',
      success: (data) => {
        this.setState({
          budgetSettings: data
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Budget Watcher</h1>
      <Log currentWeekLog={this.state.currentWeekLog}/>
      <LogEntry updateDescription={this.updateDescription} updateAmount={this.updateAmount} addLog={this.addLog} delete={this.deleteMostRecent}/>
      <Budget budgetSettings={this.state.budgetSettings} addBudgetItem={this.addBudgetItem} updateBudgetDescription={this.updateBudgetDescription} updateBudgetAmount={this.updateBudgetAmount} resetBudget={this.resetBudget}/>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));