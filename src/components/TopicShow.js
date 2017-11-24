import React from 'react'
import { connect } from 'react-redux';


const TopicShow = (props) => {
  return (
    <div>{props.topic.name}</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const topic = state.topics.topics.find(topic => topic.id == ownProps.match.params.topicId)

  if (topic) {
     return { topic }
   } else {
     return { topic: {} }
   }
 }

export default connect(mapStateToProps)(TopicShow)
