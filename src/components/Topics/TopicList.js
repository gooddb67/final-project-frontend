import React from 'react';
import TopicCard from './TopicCard';
import { Grid } from 'semantic-ui-react';

const TopicList = props => {
  const renderTopics = props.topics.map((topic, idx) => (
    <Grid.Column key={idx}>
      <TopicCard
        onTopicDelete={props.onTopicDelete}
        topic={topic}
        onSelect={props.onSelect}
      />
    </Grid.Column>
  ));

  return <Grid columns="four">{renderTopics}</Grid>;
};

export default TopicList;
