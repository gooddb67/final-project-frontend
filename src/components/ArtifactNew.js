import React from 'react'
import { connect } from 'react-redux';
import {createArtifact} from '../actions/artifacts'

class ArtifactNew extends React.Component {

  state = {
      media: '',
      url: '',
      topic_id: this.props.subtopic.topic_id,
      subtopic_id: this.props.subtopic.id
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createArtifact(this.state);
  }

  handleMediaChange = event => {
    this.setState({
      media: event.target.value
    });
  }

  handleUrlChange = event => {
    this.setState({
      url: event.target.value
    });
  }

  render(){

    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input
          type="text"
          onChange={this.handleMediaChange}
          placeholder="Media Type" />
        <input
          type="text"
          onChange={this.handleUrlChange}
          placeholder="URL" />
        <input type="submit" value="Add Artifact" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    createArtifact: (params) => {
      dispatch(createArtifact(params))
    }
  }
}

export default connect(null,  mapDispatchToProps)(ArtifactNew)
