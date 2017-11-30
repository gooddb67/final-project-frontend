import React from 'react';
import ArtifactCard from './ArtifactCard'


const ArtifactList = (props) => {
  console.log("artifactlist", props)

  const renderArtifacts = props.artifacts.map((artifact, idx) =>
  <ArtifactCard key={artifact.id} artifact={artifact}/>
  );
  return (
    <div>{renderArtifacts}</div>
  )
}

export default ArtifactList
