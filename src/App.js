import React, { Component } from 'react';
import TopicContainer from './containers/TopicContainer'
import { Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'

class App extends Component {


  render() {
    return (
      <Container>
        <div>
          <Route exact path="/" render={() => <Homepage />} />
          <Route path='/topics' component={TopicContainer} />
        </div>
      </Container>
    );
  }
}

export default App;
