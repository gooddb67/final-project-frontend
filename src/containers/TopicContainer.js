import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, selectTopic } from "../actions/topics";
import { fetchArtifacts } from "../actions/artifacts";
import TopicList from '../components/TopicList';
import TopicShow from '../components/TopicShow'
import TopicNew from '../components/TopicNew'
import SubtopicShow from './SubtopicShow'
import SubtopicNew from '../components/SubtopicNew'
import { Grid } from 'semantic-ui-react'
import TopicGrid from './TopicGrid'


class TopicContainer extends Component {
  componentDidMount(){
     this.props.fetchTopics()
     this.props.fetchArtifacts()
  }

  render() {
    return (

        <div>
            <Route path={`${this.props.match.url}/${this.props.selectTopic.id}/subtopics/:subtopicId`} component={SubtopicShow} />
            <Route exact path={this.props.match.url} render={() =>
              <TopicGrid
              topics={this.props.topics}
              selectTopic={this.props.selectTopic}
              onSelect={this.props.onSelect} />}
            />
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
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
