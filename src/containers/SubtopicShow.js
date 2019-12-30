import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from '../actions/artifacts';
import { fetchTopics } from '../actions/topics';
import ArtifactNew from '../components/Artifacts/ArtifactNew';
import ArtifactList from '../components/Artifacts/ArtifactList';
import ArtifactFilter from '../components/Artifacts/ArtifactFilter';
import { Header, Grid } from 'semantic-ui-react';

class SubtopicShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: ''
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(filterValue) {
    this.setState({ filterValue });
  }

  render() {
    return (
      <div>
        <Header size={'large'}>{this.props.subtopic.name}</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <ArtifactNew subtopic={this.props.subtopic} />
            </Grid.Column>
            <Grid.Column width={4}>
              <ArtifactFilter
                filterValue={this.state.filterValue}
                onChange={this.handleFilterChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ArtifactList
          subtopicId={this.props.match.params.subtopicId}
          filterValue={this.state.filterValue}
          artifacts={this.props.artifacts}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const subtopic = state.topics.selectTopic.subtopics.find(
    subtopic => subtopic.id === Number(ownProps.match.params.subtopicId)
  );

  if (subtopic) {
    return { subtopic: subtopic, artifacts: state.artifacts.artifacts };
  } else {
    return { subtopic: {} };
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArtifacts: () => {
      dispatch(fetchArtifacts());
    },
    fetchTopics: () => {
      dispatch(fetchTopics());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtopicShow);
