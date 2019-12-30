import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default class ArtifactFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  clearFilter() {
    const { onChange } = this.props;
    onChange('');
  }
  render() {
    const { filterValue } = this.props;

    return (
      <div>
        <select
          value={filterValue}
          onChange={this.handleChange}
          name="media types"
        >
          <option value="" disabled defaultValue hidden>
            Filter artifacts
          </option>
          <option value="Link">Link</option>
          <option value="Video">Video</option>
          <option value="Image">Image</option>
        </select>
        <br />
        <br />
        <Button onClick={this.clearFilter}>Clear Filter</Button>
      </div>
    );
  }
}

ArtifactFilter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
