import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import {createTopic, addTopic} from '../actions/topics'
import { Route, Redirect } from "react-router-dom";


class TopicNew extends React.Component {

  state = {
    name: '',
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createTopic(this.state)
    this.setState({
      redirectToSubtopic: true
    })
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render(){

    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Add a Topic" />
        <Form.Button><input type="submit" value="Add Topic" /></Form.Button>
      </form>
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
