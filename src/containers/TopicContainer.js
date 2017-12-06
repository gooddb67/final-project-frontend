import React, { Component } from "react";
import { Route} from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, selectTopic, deleteSubtopicFromDb } from "../actions/topics";
import { fetchArtifacts } from "../actions/artifacts";
import SubtopicShow from './SubtopicShow'
import TopicGrid from './TopicGrid'
import {Header} from 'semantic-ui-react'
import Chart from '../components/Chart'


class TopicContainer extends Component {
  componentDidMount(){
     this.props.fetchTopics()
     this.props.fetchArtifacts()
   }

  render() {
    return (
      <div>

          <Header color='grey' as='h1'>Davey's Notetaking Application</Header>
          <div>
            <Route exact path={`${this.props.match.url}/chart`} render={() =>
              <Chart
              topics={this.props.topics}
              artifacts={this.props.artifacts}/>}
            />
              <Route exact path={`${this.props.match.url}/${this.props.selectTopic.id}/subtopics/:subtopicId`} component={SubtopicShow} />
              <Route exact path={this.props.match.url} render={() =>
                <TopicGrid
                topics={this.props.topics}
                selectTopic={this.props.selectTopic}
                onDelete={this.props.onDelete}
                onSelect={this.props.onSelect} />}
              />
          </div>
        </div>

    );
  }
}

  function mapStateToProps(state) {
    return {
      topics: state.topics.topics,
      artifacts: state.artifacts.artifacts,
      selectTopic: state.topics.selectTopic,
      isLoading: state.isLoading
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchTopics: () => {
        dispatch(fetchTopics());
      },
      fetchArtifacts: () => {
        dispatch(fetchArtifacts())
      },
      onSelect: topic => {
        dispatch(selectTopic(topic))
      },
      onDelete: subtopic => {
        dispatch(deleteSubtopicFromDb(subtopic))
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
