import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

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

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/budget',
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
      <Search updateDescription={this.updateDescription} updateAmount={this.updateAmount}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));