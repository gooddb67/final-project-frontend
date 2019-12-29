import React, { Component } from 'react';
import TopicContainer from './containers/TopicContainer';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Homepage />} />
        <Container>
          <Route path="/topics" component={TopicContainer} />
        </Container>
      </div>
    );
  }
}

export default App;
