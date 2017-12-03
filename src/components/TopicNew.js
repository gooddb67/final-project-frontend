import React from 'react'
import { connect } from 'react-redux';
import { Form, Grid, Button } from 'semantic-ui-react'
import {createTopic, addTopic} from '../actions/topics'
import { Route, Redirect } from "react-router-dom";


class TopicNew extends React.Component {

  state = {
    name: '',
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if(this.state.name !== ''){
      this.props.createTopic(this.state)
      this.setState({
        name: ''
      })
    }else{
      console.log('fields cannot be blank')
    }
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render(){

    return (
    <Form onSubmit={this.handleOnSubmit} >
      <Grid columns='two'>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              type="text"
              onChange={this.handleOnChange}
              value={this.state.name}
              placeholder="Add Topic" />
            </Grid.Column>
            <Grid.Column>
              <button className='submit-button submit-button-topic' type="submit" value="Add Topic">Submit</button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    createTopic: (params) => {
      dispatch(createTopic(params))
    }
  }
}
export default connect(null, mapDispatchToProps )(TopicNew)
