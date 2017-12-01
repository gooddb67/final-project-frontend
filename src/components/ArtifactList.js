import React from 'react';
import ArtifactCard from './ArtifactCard'
import {Grid} from 'semantic-ui-react'


const ArtifactList = (props) => {


  const renderLinks = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Link'
  }).map(artifact => <ArtifactCard key={artifact.id} artifact={artifact}/>)

  const renderVideos = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Video'
  }).map(artifact => <ArtifactCard key={artifact.id} artifact={artifact}/> )

  const renderImages = props.artifacts.filter((artifact, idx) => {
    return artifact.media === 'Image'
  }).map(artifact => <ArtifactCard key={artifact.id} artifact={artifact}/> )

  // const renderArtifacts = props.artifacts.map((artifact, idx) =>
  // <ArtifactCard key={artifact.id} artifact={artifact}/>
  // );
  return (
      <div>
        <div>{renderLinks}</div>
        <div>{renderVideos}</div>
        <div>{renderImages}</div>
      </div>
    )
  }

export default ArtifactList
