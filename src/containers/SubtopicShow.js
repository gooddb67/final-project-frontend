import React from 'react';
import { connect } from 'react-redux';
import { fetchArtifacts } from "../actions/artifacts";
import {fetchTopics} from "../actions/topics"
import ArtifactNew from "../components/ArtifactNew"
import ArtifactList from "../components/ArtifactList"
import ArtifactFilter from '../components/ArtifactFilter'
import {Header, Grid} from 'semantic-ui-react'

class SubtopicShow extends React.Component {

  state = {
    filteredArtifacts: null
  }

  render(){
    const subtopicArtifactsArray = this.props.artifacts.filter((artifact, index) => artifact.subtopic.id == this.props.match.params.subtopicId )

    return(
        <div>
          <Header size={'large'}>{this.props.subtopic.name}</Header>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <ArtifactNew subtopic={this.props.subtopic}/>
              </Grid.Column>
              <Grid.Column width={4}>
                <ArtifactFilter artifacts={subtopicArtifactsArray}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
    },
    fetchTopics: () => {
      dispatch(fetchTopics())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtopicShow);
