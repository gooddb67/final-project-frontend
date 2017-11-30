import React from 'react'
import { connect } from 'react-redux';
import {createArtifact} from '../actions/artifacts'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'u51cllhb';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dyb2wepuc/upload/';

class ArtifactNew extends React.Component {

  state = {
      media: '',
      url: '',
      topic_id: this.props.subtopic.topic_id,
      subtopic_id: this.props.subtopic.id,
      uploadedFileCloudinaryUrl: ''
    }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      let responseArr =  response.body.secure_url.split('/')
      let splicedResp = responseArr.splice(6,0, "w_285,h_285").join('/')

      this.setState({
        url: responseArr.join('/')
      });
    }
  });
}

  handleOnSubmit = event => {
    event.preventDefault();
      if (this.state.media !== '' && this.state.url !== ''){
      this.props.createArtifact(this.state);
      this.setState({
        url: ''
      })
    }else{
      console.log('all fields required')
    }
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
      <div>
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <select value={this.state.value} onChange={this.handleMediaChange}>
            <option disabled value selected > -- select media type -- </option>
            <option value="Video">Video</option>
            <option value="Image">Image</option>
            <option value="Link">Link</option>
          </select>
          <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
          <input
            type="text"
            onChange={this.handleUrlChange}
            value={this.state.url}
            placeholder="URL" />
          <input type="submit" value="Add Artifact" />
        </form>
        <div>

          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedFileCloudinaryUrl} />
            </div>}
          </div>
        </div>

      </div>//close return
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
