import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import QuestionsContainer from './components/QuestionsContainer';
import Question from './components/Question'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Depression Screener</h2>

        </div>
        <QuestionsContainer />
      </div>
    );
  }
}

export default App;
