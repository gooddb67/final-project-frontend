import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics, selectTopic } from "../actions/topics";
import TopicList from '../components/TopicList';
import TopicShow from '../components/TopicShow'
import TopicNew from '../components/TopicNew'


class TopicContainer extends Component {
  componentDidMount(){
     this.props.fetchTopics()
  }

  render() {
    return (
      <div>
        <TopicList topics={this.props.topics} onSelect={this.props.onSelect}/>
        <TopicNew />
        <TopicShow topic={this.props.selectTopic} />
      </div>
    );
  }
}

  function mapStateToProps(state) {
    return {
      topics: state.topics.topics,
      selectTopic: state.topics.selectTopic,
      isLoading: state.isLoading
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchTopics: () => {
        dispatch(fetchTopics());
      },
      onSelect: topic => {
        dispatch(selectTopic(topic))
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
