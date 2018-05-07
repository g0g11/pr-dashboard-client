import React, { Component } from 'react';

import PullRequestList from './pullrequest/pullrequest_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pull Requests Dashboard</h1>
        </header>
        <PullRequestList />
      </div>
    );
  }
}

export default App;