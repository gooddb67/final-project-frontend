import React from 'react';
import ArtifactCard from './ArtifactCard'
import {Grid} from 'semantic-ui-react'

const ArtifactList = (props) => {


  const renderLinks = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Link'
  }).map(artifact => <Grid.Column><ArtifactCard key={artifact.id} artifact={artifact}/></Grid.Column>)

  const renderVideos = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Video'
  }).map(artifact => <Grid.Column><ArtifactCard key={artifact.id} artifact={artifact}/></Grid.Column> )

  const renderImages = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Image'
  }).map(artifact => <Grid.Column><ArtifactCard key={artifact.id} artifact={artifact}/></Grid.Column> )

  return (
      <div>
        <div>
          <h1>Links</h1>
          <Grid columns='2'>{renderLinks}</Grid>
        </div>

        <div>
          <h1>Images</h1>
          <Grid columns='2'>{renderImages}</Grid>
        </div>

        <div>
          <h1>Videos</h1>
          <Grid columns='1'>{renderVideos}</Grid>
        </div>

      </div>
    )
  }

export default ArtifactList
