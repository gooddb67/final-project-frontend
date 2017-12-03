import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from "../actions/artifacts";
import ArtifactNew from "../components/ArtifactNew"
import ArtifactList from "../components/ArtifactList"
import ArtifactFilter from '../components/ArtifactFilter'
import {Segment, Header, Grid} from 'semantic-ui-react'

class SubtopicShow extends React.Component {

  render(){

    const subtopicArtifactsArray = this.props.artifacts.filter((artifact, index) => artifact.subtopic.id == this.props.match.params.subtopicId )

    return(
        <div>
          <Header>{this.props.subtopic.name}</Header>

          <ArtifactNew subtopic={this.props.subtopic}/>
          <ArtifactFilter artifacts={subtopicArtifactsArray}/>
          <ArtifactList artifacts={subtopicArtifactsArray} />
      </div>

      )
    }
  }

function mapStateToProps(state, ownProps){
  const subtopic = state.topics.selectTopic.subtopics.find(subtopic => subtopic.id == ownProps.match.params.subtopicId)

  if (subtopic){
    return {subtopic: subtopic, artifacts: state.artifacts.artifacts}
  } else{
    return {subtopic: {}}
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchArtifacts: () => {
      dispatch(fetchArtifacts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtopicShow);
