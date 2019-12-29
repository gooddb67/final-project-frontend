import React from 'react';
import TopicList from '../components/Topics/TopicList';
import TopicShow from '../components/Topics/TopicShow';
import TopicNew from '../components/Topics/TopicNew';

export default class TopicGrid extends React.Component {
  render() {
    return (
      <div>
        <TopicNew topic={this.props.selectTopic} />

        <TopicList
          topics={this.props.topics}
          topic={this.props.selectTopic}
          onSelect={this.props.onSelect}
          onDelete={this.props.onDeleteTopic}
          onTopicDelete={this.props.onTopicDelete}
        />

        <TopicShow
          topic={this.props.selectTopic}
          onDelete={this.props.onDelete}
        />
      </div>
    );
  }
}
