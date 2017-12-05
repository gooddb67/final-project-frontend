import React from 'react'
import { Segment } from 'semantic-ui-react'
import renderHTML from 'react-render-html';
import { Button, Form, Modal } from 'semantic-ui-react'
import { createComment, deleteArtifactFromDb, addComment } from "../actions/artifacts";
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaTwitter from 'react-icons/lib/fa/twitter'

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

  backgroundColor(){
    if (this.props.artifact.media === 'Image'){
      return '#c1e1c5'
    } else if (this.props.artifact.media === 'Link'){
      return '#c4def6'
    } else{
      return '#fef3bd'
    }
  }

  handleChange = event =>{
    this.setState({
      content: event.target.value,
    })
  }

  handleSave = event =>{
    event.preventDefault();
    if (this.state.content !== ''){
      this.props.createComment(this.state)
      this.props.addComment(this.state)
      this.setState({
        content: ''
      })
    }else{
      console.log('all fields required')
    }
  }

  handleModal = event => {
    return this.props.artifact.comments.map((comment, idx) => {
      return <p key={idx}>{comment.content} <Divider /></p>
    })
  }

  handleDelete = event => {
    event.preventDefault()
    this.props.deleteArtifactFromDb(this.props.artifact.id)
  }

  render(){
    const artifactBackground = {backgroundColor: this.backgroundColor()}
    const link = this.props.artifact.url
    const url = `https://twitter.com/intent/tweet?url=${link}&hashtags=${this.props.artifact.subtopic.name}`

    return(
        <div className='artifact-container'>
          <Segment style={artifactBackground} attached='top' textAlign="center" compact>
            {this.mediaRender()}
          </Segment>
          <Segment attached='bottom'>
          <Form>
            <Form.Group>
              <Form.Input value={this.state.content} placeholder="Add Note" onChange={this.handleChange} size="small"></Form.Input>
              <Button onClick={this.handleSave} size="small" floated="right">Save</Button>

              <Modal trigger ={
                <Button onClick={this.handleModal} color='green' floated="right">View Notes</Button>}>
                <Modal.Header>Artifact Notes</Modal.Header>
                <Modal.Content>
                  <div>
                    {this.handleModal()}
                  </div>
                </Modal.Content>
              </Modal>
              <a target="_blank" class="twitter-share-button"
                  href={url}><FaTwitter size={35}/>
              </a>
              <FaTrashO size={35} onClick={this.handleDelete}/>
            </Form.Group>
          </Form>

          </Segment>
        </div>
      )
    }
  }

  function mapStateToProps(state){
    return{
      storeArtifacts: state.artifacts.artifacts
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      createComment: (params) => {
        dispatch(createComment(params))
      },
      deleteArtifactFromDb: (artifact) => {
        dispatch(deleteArtifactFromDb(artifact))
      },
      addComment: (comment) => {
        dispatch(addComment(comment))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ArtifactCard)
