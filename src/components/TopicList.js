import React from 'react';
import TopicCard from './TopicCard'


const TopicList = (props) => {

  const renderTopics = props.topics.map((topic, idx) =>
  <TopicCard key={topic.id} topic={topic} onSelect={props.onSelect}/>
  );
  return (
    <div>{renderTopics}</div>
  )
}

export default TopicList
