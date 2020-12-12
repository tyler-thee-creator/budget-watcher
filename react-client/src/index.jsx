import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Log from './components/Log.jsx';
import LogEntry from './components/LogEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeekLog: [],
      formSubmitDescription: '',
      formSubmitAmount: 0
    }
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.addLog = this.addLog.bind(this);
    this.deleteMostRecent = this.deleteMostRecent.bind(this);
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

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/currentWeek',
      success: (data) => {
        this.setState({
          currentWeekLog: data
        })
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
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));