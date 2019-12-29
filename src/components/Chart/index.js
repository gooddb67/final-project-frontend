import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Header } from 'semantic-ui-react';

import chartColors from './chartColors';

const Chart = props => {
  const topicNames = () => {
    return props.topics.map(topic => topic.name);
  };

  const topicArtifacts = () => {
    return props.topics.map(topic => topic.artifacts.length);
  };

  const data = {
    labels: topicNames(),
    datasets: [
      {
        data: topicArtifacts(),
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors
      }
    ]
  };

  return (
    <div>
      <Header size="medium" textAlign="center">
        Topic Breakdown
      </Header>
      <div>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Chart;
