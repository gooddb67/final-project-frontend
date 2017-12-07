import React, { Component } from "react";
import { Route} from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, selectTopic, deleteSubtopicFromDb, selectSubtopic } from "../actions/topics";
import { fetchArtifacts } from "../actions/artifacts";
import SubtopicShow from './SubtopicShow'
import TopicGrid from './TopicGrid'
import {Header} from 'semantic-ui-react'
import Chart from '../components/Chart'
import Times from '../components/Times'
import NavBar from '../components/NavBar'


class TopicContainer extends Component {
  componentDidMount(){
     this.props.fetchTopics()
     this.props.fetchArtifacts()
   }

  render() {
    console.log(this.props.topics);
    return (
      <div>
          <NavBar />
          <Header color='grey' as='h1'>URLink</Header>
          <div>
            <Route exact path={`${this.props.match.url}/chart`} render={() =>
              <Chart
              topics={this.props.topics}
              artifacts={this.props.artifacts}/>}
            />
            <Route exact path={`${this.props.match.url}/discover`} render={(props) =>
              <Times
                {...props}
                selectTopic={this.props.selectTopic}
                onSelect={this.props.onSelect}
                onSubtopicSelect={this.props.onSubtopicSelect}
              />
            }
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
      },
      onSubtopicSelect: subtopic => {
        dispatch(selectSubtopic(subtopic))
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
