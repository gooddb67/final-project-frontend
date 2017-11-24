import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTopics } from "../actions/topics";
import TopicList from '../components/TopicList';
import TopicShow from '../components/TopicShow'


class TopicContainer extends Component {
  componentDidMount(){
     this.props.fetchTopics()
  }

  render() {
    return (
      <div>
        <TopicList topics={this.props.topics}/>

        <Route path={`${this.props.match.url}/:topicId`} component={TopicShow} />
        <Route exact path={this.props.match.url} render ={()=> (
          <h3>Select a Topic </h3>
        )}/>
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
      topics: state.topics.topics,
      isLoading: state.isLoading
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchTopics: () => {
        dispatch(fetchTopics());
      }
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(TopicContainer);
