import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import renderHTML from 'react-render-html';
import {Grid} from 'semantic-ui-react'
import { Button, Comment, Form } from 'semantic-ui-react'
import { createComment } from "../actions/artifacts";
import { connect } from 'react-redux';


class ArtifactCard extends React.Component {

  state = {
    content: '',
    artifact_id: this.props.artifact.id
  }

   mediaRender(){
    if (this.props.artifact.media === 'Image') {
      return renderHTML(`<img src="${this.props.artifact.url}" />`)
    }else if(this.props.artifact.media === 'Link'){
      return renderHTML(`<a href="${this.props.artifact.url}"target="_blank"> ${this.props.artifact.url} </a>`)
    }else{
      return renderHTML(this.props.artifact.url)
    }
  }

  handleChange = event =>{
    this.setState({
      content: event.target.value,
    })
  }

  handleSave = event =>{
    event.preventDefault();
    this.props.createComment(this.state)
    this.setState({
      content: ''
    })
  }


  render(){
    return(
        <div>
          <Segment attached='top' compact={true}>
            {this.mediaRender()}
          </Segment>
          <Segment attached='bottom'>
          <Form>
            <Form.Group>
              <Form.Input value={this.state.content} onChange={this.handleChange} size="small"></Form.Input>
              <Button onClick={this.handleSave} size="small" floated="right">Save</Button>
              <Button floated="right">View Notes</Button>
            </Form.Group>
          </Form>
          </Segment>
        </div>
      )
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      createComment: (params) => {
        dispatch(createComment(params))
      }
    }
  }

  export default connect(null, mapDispatchToProps)(ArtifactCard)
