import React from 'react'
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom'
import SubtopicNew from './SubtopicNew'
import { Grid } from 'semantic-ui-react'



const TopicShow = (props) => {

  const subtopicLinks =

    props.topic.subtopics ? props.topic.subtopics.map((subtopic, index) => <Grid.Column>
      <div className='subtopic-card' textAlign='center'>
        <div className='subtopic-card-container'>
          <Link key={subtopic.id} to={`/topics/${props.topic.id}/subtopics/${subtopic.id}`}> {subtopic.name}
        </Link>
      </div>
    </div>
  </Grid.Column>) : null

  return (
    <div>
      <h2>{props.topic ? props.topic.name : null }</h2>
       {subtopicLinks ? <SubtopicNew /> : null  }
       <Grid columns='two'>{subtopicLinks}</Grid>
    </div>
  )
}


export default TopicShow
