import React from 'react'
import {filterArtifacts} from '../actions/artifacts'
import { connect } from 'react-redux';


class ArtifactFilter extends React.Component {

  state = {
    value: ''
  }

  handleChange = (event) => {
    var value = event.target.value;
    this.setState({
      value: value
    })
    
    this.props.filterArtifacts(value)
  }
//onClick={() => alert(item)}
  render(){
    return(
    <form>
      <select value={this.state.filter} onChange={(event) => this.handleChange(event)}>
        <option disabled value selected > -- select filter -- </option>
        <option value="Link">Link</option>
        <option value="Video">Video</option>
        <option value="Image">Image</option>
      </select>
    </form>
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
