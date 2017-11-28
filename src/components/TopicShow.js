import React from 'react'
import { connect } from 'react-redux';
import {Route, Link} from 'react-router-dom'
import SubtopicNew from './SubtopicNew'
import { Card } from 'semantic-ui-react'



const TopicShow = (props) => {

  const subtopicLinks = props.topic.subtopics ? props.topic.subtopics.map((subtopic, index) => <Card><Card.Content textAlign='center'> <Link key={subtopic.id} to={`/topics/${props.topic.id}/subtopics/${subtopic.id}`}> {subtopic.name} </Link></Card.Content> </Card>) : null

  return (
    <div>
      <h2>{props.topic ? props.topic.name : null }</h2>
      {subtopicLinks}
       {subtopicLinks ? <SubtopicNew /> : null  }
    </div>
  )
}


export default TopicShow
