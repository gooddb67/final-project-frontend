import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import {createSubtopic} from '../actions/topics'
import { Route, Redirect } from 'react-router'



class SubtopicNew extends React.Component {

  state = {
    name: '',
    topic_id: this.props.selectTopic,
    redirectToSubtopic: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({topic_id: nextProps.selectTopic})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSubtopic(this.state);

    this.setState({redirectToSubtopic: true})
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
          placeholder="Add a Subtopic" />
        <Form.Button><input type="submit" value="Add Subtopic" /></Form.Button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectTopic: state.topics.selectTopic.id
  };
}

function mapDispatchToProps(dispatch){
  return{
    createSubtopic: (params) => {
      dispatch(createSubtopic(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtopicNew)
