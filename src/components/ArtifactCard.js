import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import renderHTML from 'react-render-html';
import {Grid} from 'semantic-ui-react'
import { Button, Comment, Form } from 'semantic-ui-react'

class ArtifactCard extends React.Component {

  state = {
    input: ''
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
      input: event.target.value
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
              <Form.Input size="small"></Form.Input>
              <Button size="small" floated="right">Save</Button>
              <Button floated="right">View Notes</Button>
            </Form.Group>
          </Form>
          </Segment>
        </div>
      )
    }
  }

export default ArtifactCard;
