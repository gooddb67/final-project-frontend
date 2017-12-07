import React from 'react'
import { connect } from 'react-redux';
import { Form, Grid } from 'semantic-ui-react'
import {createSubtopic} from '../actions/topics'

class SubtopicNew extends React.Component {

  state = {
    name: '',
    topic_id: this.props.selectTopic,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({topic_id: nextProps.selectTopic})
  }

  handleOnSubmit = event => {
    event.preventDefault()
    if (this.state.name !== '') {
      this.props.createSubtopic(this.state);
      this.setState({
        name: ''
      })
    } else {
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
                placeholder="Add Subtopic" />
              </Grid.Column>
              <Grid.Column>
                <button className='submit-button submit-button-subtopic' type="submit" value="Add Topic">Add Subtopic</button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
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
