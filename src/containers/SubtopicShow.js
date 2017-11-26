import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from "../actions/artifacts";
import ArtifactNew from "../components/ArtifactNew"


class SubtopicShow extends React.Component {

    render(){

      const subtopicArtifactsArray = this.props.artifacts.filter((artifact, index) => artifact.subtopic.id == this.props.match.params.subtopicId )

       const subtopicArtifactsUrl = subtopicArtifactsArray.map((artifact, index) =>
         <iframe key={index} width="420" height="315"
           src={artifact.url} allowFullScreen>
         </iframe>
     )
    return(
      <div>
        <div>{this.props.subtopic.name}</div>
        <ArtifactNew subtopic={this.props.subtopic}/>

        {subtopicArtifactsUrl}

    </div>

    )
  }
}

function mapStateToProps(state, ownProps){
  const subtopic = state.topics.selectTopic.subtopics.find(subtopic => subtopic.id == ownProps.match.params.subtopicId)

  if (subtopic){
    return {subtopic: subtopic, artifacts: state.artifacts.topics}
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
