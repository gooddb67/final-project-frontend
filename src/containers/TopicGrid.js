import React from 'react'
import { Grid } from 'semantic-ui-react'
import TopicList from '../components/TopicList';
import TopicShow from '../components/TopicShow'
import TopicNew from '../components/TopicNew'
import {Link} from 'react-router-dom'

  export default class TopicGrid extends React.Component{

  render(){
    return (
            <div>
              <TopicNew topic={this.props.selectTopic}/>
              
                <TopicList
                  onDelete={this.props.onDelete}
                  topics={this.props.topics}
                  topic={this.props.selectTopic}
                  onSelect={this.props.onSelect}
                />

            <TopicShow topic={this.props.selectTopic} />
          </div>
      )
    }
  }
