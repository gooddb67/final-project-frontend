import React, { Component } from 'react';
import TopicContainer from './containers/TopicContainer'
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/topics' component={TopicContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
