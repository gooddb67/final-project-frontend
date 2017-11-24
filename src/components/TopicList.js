import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = (props) => {
  const renderTopics = props.topics.map((topic, idx) =>
  <div>
    <Link key={idx} to={`/topics/${topic.id}`}>{topic.name}</Link><br/>
  </div>
  );
  return (
    <div>{renderTopics}</div>
  )
}

export default TopicList
