import React from 'react';
import ArtifactCard from './ArtifactCard';
import { Grid } from 'semantic-ui-react';

class ArtifactList extends React.Component {
  render() {
    const artifacts = this.props.artifacts
      .filter(artifact => {
        const { filterValue, subtopicId } = this.props;

        return (
          (artifact.subtopic.id === Number(subtopicId) &&
            artifact.media === filterValue) ||
          (artifact.subtopic.id === Number(subtopicId) && !filterValue)
        );
      })
      .map((artifact, idx) => {
        return (
          <Grid.Column key={idx}>
            <ArtifactCard artifact={artifact} />
          </Grid.Column>
        );
      });

    return (
      <div>
        <Grid columns="2">{artifacts}</Grid>
      </div>
    );
  }
}

export default ArtifactList;
