import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Log from './components/Log.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeekLog: [/*example*/{ id: 1, description: 'hello' }/*example*/],
      formSubmitDescription: '',
      formSubmitAmount: 0
    }
    this.updateDescription = this.updateDescription.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
    this.addLog = this.addLog.bind(this);
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

      },
      error: () => {

      }
    });
    e.preventDefault();
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/currentWeek',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Budget Watcher</h1>
      <List currentWeekLog={this.state.currentWeekLog}/>
      <Log updateDescription={this.updateDescription} updateAmount={this.updateAmount} addLog={this.addLog}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));