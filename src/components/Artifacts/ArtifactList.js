import React from 'react';
import ArtifactCard from './ArtifactCard';
import { Grid } from 'semantic-ui-react';

const ArtifactList = props => {
  const renderLinks = props.artifacts
    .filter(artifact => {
      return artifact.media === 'Link';
    })
    .map((artifact, idx) => (
      <Grid.Column key={idx}>
        <ArtifactCard artifact={artifact} />
      </Grid.Column>
    ));

  const renderVideos = props.artifacts
    .filter(artifact => {
      return artifact.media === 'Video';
    })
    .map((artifact, idx) => (
      <Grid.Column key={idx}>
        <ArtifactCard artifact={artifact} />
      </Grid.Column>
    ));

  const renderImages = props.artifacts
    .filter(artifact => {
      return artifact.media === 'Image';
    })
    .map((artifact, idx) => (
      <Grid.Column key={idx}>
        <ArtifactCard artifact={artifact} />
      </Grid.Column>
    ));

  return (
    <div>
      <div>
        <Grid columns="2">{renderLinks}</Grid>
      </div>
      <br />
      <br />

      <div>
        <Grid columns="2">{renderImages}</Grid>
      </div>
      <br />
      <br />

      <div>
        <Grid columns="1">{renderVideos}</Grid>
      </div>
    </div>
  );
};

export default ArtifactList;
