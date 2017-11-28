import React from 'react'
import { Grid } from 'semantic-ui-react'
import TopicList from '../components/TopicList';
import TopicShow from '../components/TopicShow'
import TopicNew from '../components/TopicNew'

  export default class TopicGrid extends React.Component{

  render(){
    return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <TopicList topics={this.props.topics} onSelect={this.props.onSelect}/>
              <TopicNew topic={this.props.selectTopic}/>
            </Grid.Column>

            <Grid.Column width={8}>
              <TopicShow topic={this.props.selectTopic} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  }
