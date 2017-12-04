import React from 'react'
import {filterArtifacts} from '../actions/artifacts'
import { connect } from 'react-redux';
import {Dropdown, Form, Menu} from 'semantic-ui-react'

const filters = [
  { key: 1, text: 'Link', value: 'Link' },
  { key: 2, text: 'Video', value: 'Video' },
  { key: 3, text: 'Image', value: 'Image' },
]

class ArtifactFilter extends React.Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    var value = event.target.innerText;
    this.setState({
      value: value
    })

    this.props.filterArtifacts(value)
  }
//onClick={() => alert(item)}
  render(){
    return(
      <Form>
        <Dropdown text= 'Filter Artifacts'
          options={filters}
          value={this.state.value}
          onChange={this.handleChange}/>
      </Form>
    // <form>
    //   <select value={this.state.filter} onChange={(event) => this.handleChange(event)}>
    //     <option disabled value selected > -- select filter -- </option>
    //     <option value="Link">Link</option>
    //     <option value="Video">Video</option>
    //     <option value="Image">Image</option>
    //   </select>
    // </form>
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
