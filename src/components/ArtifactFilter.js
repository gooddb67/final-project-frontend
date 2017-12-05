import React from 'react'
import {filterArtifacts} from '../actions/artifacts'
import { connect } from 'react-redux';
import {Dropdown, Form} from 'semantic-ui-react'

const filters = [
  { key: 1, text: 'Link', value: 'Link' },
  { key: 2, text: 'Video', value: 'Video' },
  { key: 3, text: 'Image', value: 'Image' },
]

class ArtifactFilter extends React.Component {

  state = {
    value: '',
  }

  handleChange = (event) => {
    var value = event.target.innerText;
    this.setState({
      value: value
    })
  }

  render(){
    return(
      <Form>
        <Dropdown text= 'Filter Artifacts'
          options={filters}
          value={this.state.value}
          onChange={this.handleChange}/>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch){
    return {
    filterArtifacts: (filter) => {
      dispatch(filterArtifacts(filter))
    }
  }
}

export default connect(null, mapDispatchToProps)(ArtifactFilter);
