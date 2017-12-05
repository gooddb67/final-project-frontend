import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, selectTopic, deleteTopic } from "../actions/topics";
import { fetchArtifacts } from "../actions/artifacts";
import TopicShow from '../components/TopicShow'
import TopicNew from '../components/TopicNew'
import SubtopicShow from './SubtopicShow'
import SubtopicNew from '../components/SubtopicNew'
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
              <Route exact path={`${this.props.match.url}/${this.props.selectTopic.id}/subtopics/:subtopicId`} component={SubtopicShow} />
              <Route exact path={this.props.match.url} render={() =>
                <TopicGrid
                topics={this.props.topics}
                selectTopic={this.props.selectTopic}
                onDelete={this.props.onDelete}
                onSelect={this.props.onSelect} />}
              />
              <Route path={`${this.props.match.url}/chart`} component={Chart}/>
          </div>
        </div>

    );
  }
}

  function mapStateToProps(state) {
    return {
      topics: state.topics.topics,
      selectTopic: state.topics.selectTopic,
      isLoading: state.isLoading,
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
      onDelete: topic => {
        dispatch(deleteTopic(topic))
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
