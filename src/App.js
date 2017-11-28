import React, { Component } from 'react';
import TopicContainer from './containers/TopicContainer'
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


class App extends Component {


  render() {
    return (
      <Container>
        <div>
          <Header as='h1'>Davey's Notetaking Application</Header>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/topics' component={TopicContainer} />
        </div>
      </Container>
    );
  }
}

export default App;
