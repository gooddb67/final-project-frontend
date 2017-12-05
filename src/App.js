import React, { Component } from 'react';
import TopicContainer from './containers/TopicContainer'
import { Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import NavBar from './components/NavBar'

class App extends Component {


  render() {
    return (
      <Container>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/topics' component={TopicContainer} />
        </div>
      </Container>
    );
  }
}

export default App;
