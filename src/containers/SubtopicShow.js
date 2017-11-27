import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from "../actions/artifacts";
import ArtifactNew from "../components/ArtifactNew"


class SubtopicShow extends React.Component {

    render(){

      const subtopicArtifactsArray = this.props.artifacts.filter((artifact, index) => artifact.subtopic.id == this.props.match.params.subtopicId )

      const subtopicArtifacts = subtopicArtifactsArray.map((artifact, index) => {
        switch (artifact.media){
          case "Video":
             return `${artifact.url}`
          case "Link":
             return `<a href="${artifact.url}" target="_blank">${artifact.url}</a>`
          case "Image":
             return `<img src="${artifact.url}" />`
        }
        return subtopicArtifacts
      }
     )
     
    return(
      <div>
        <div>{this.props.subtopic.name}</div>
        <ArtifactNew subtopic={this.props.subtopic}/>

        <div dangerouslySetInnerHTML={{__html: subtopicArtifacts}}></div>


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
