import React from 'react';
import { connect } from 'react-redux';
import { createArtifact } from '../../actions/artifacts';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Dropdown, Form } from 'semantic-ui-react';

const CLOUDINARY_UPLOAD_PRESET = 'u51cllhb';
const CLOUDINARY_UPLOAD_URL =
  'https://api.cloudinary.com/v1_1/dyb2wepuc/upload/';

const options = [
  { key: 1, text: 'Link', value: 'Link' },
  { key: 2, text: 'Video', value: 'Video' },
  { key: 3, text: 'Image', value: 'Image' }
];

class ArtifactNew extends React.Component {
  state = {
    media: '',
    url: '',
    topic_id: this.props.subtopic.topic_id,
    subtopic_id: this.props.subtopic.id,
    uploadedFileCloudinaryUrl: ''
  };

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        let responseArr = response.body.secure_url.split('/');

        this.setState({
          url: responseArr.join('/')
        });
      }
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if (this.state.media !== '' && this.state.url !== '') {
      this.props.createArtifact(this.state);
      this.setState({
        url: '',
        caption: '',
        media: ''
      });
    } else {
      alert('All fields required');
    }
  };

  handleMediaChange = event => {
    const value = event.target.innerText;
    this.setState({
      media: value
    });
    console.log(this.state.media);
  };

  handleUrlChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  handleCaptionChange = event => {
    this.setState({
      caption: event.target.value
    });
  };

  render() {
    const isImage = this.state.media;

    return (
      <div>
        {isImage !== 'Image' ? (
          <div>
            <Form onSubmit={this.handleOnSubmit}>
              <Dropdown
                placeholder="Select Media"
                options={options}
                value={this.state.media}
                onChange={this.handleMediaChange}
              />

              <Form.Input
                type="text"
                onChange={this.handleUrlChange}
                value={this.state.url}
                placeholder="URL"
              />
              <Form.Input
                type="text"
                onChange={this.handleCaptionChange}
                value={this.state.caption}
                placeholder="Caption"
              />
              <Form.Button type="submit" value="Add Artifact">
                Add Artifact
              </Form.Button>
            </Form>
          </div>
        ) : (
          <div>
            <Form onSubmit={this.handleOnSubmit}>
              <Dropdown
                placeholder="Add Media Type"
                options={options}
                value={this.state.media}
                onChange={this.handleMediaChange}
              />
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}
              >
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
              <Form.Input
                type="text"
                onChange={this.handleUrlChange}
                value={this.state.url}
                placeholder="URL"
              />
              <Form.Input
                type="text"
                onChange={this.handleCaptionChange}
                value={this.state.caption}
                placeholder="Caption"
              />
              <Form.Button type="submit" value="Add Artifact">
                Add Artifact
              </Form.Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createArtifact: params => {
      dispatch(createArtifact(params));
    }
  };
}

export default connect(null, mapDispatchToProps)(ArtifactNew);
