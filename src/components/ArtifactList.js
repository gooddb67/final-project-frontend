import React from 'react';
import ArtifactCard from './ArtifactCard'
import {Grid} from 'semantic-ui-react'


const ArtifactList = (props) => {
  console.log("artifactlist", props)

  const renderArtifacts = props.artifacts.map((artifact, idx) =>
  <ArtifactCard key={artifact.id} artifact={artifact}/>
  );
  return (
    <Grid celled='internally' verticalAlign>{renderArtifacts}</Grid>
  )
}

export default ArtifactList
