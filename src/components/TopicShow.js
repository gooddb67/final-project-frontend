import React from 'react'
import { Link} from 'react-router-dom'
import SubtopicNew from './SubtopicNew'
import { Grid } from 'semantic-ui-react'



const TopicShow = (props) => {

  const handleDelete = (subtopic) => {
    props.onDelete(subtopic.id)
  }

  const deleteSub = {
    float: 'right',
    'font-size': '25px'
  }

  const getSubtopicLinks = () => {
    if (props.topic.subtopics) {
      return (
        props.topic.subtopics.map((subtopic, index) => (
          <Grid.Column>
            <div className='subtopic-card' textAlign='center'>
              <div className='subtopic-card-container'>
<<<<<<< HEAD
                <Link key={subtopic.id} to={`/topics/${props.topic.id}/subtopics/${subtopic.id}`}>
                 {subtopic.name}
               </Link>
               <span id='deleteSub' style={deleteSub} onClick={() => handleDelete(subtopic)}>X</span>
=======
                <Link key={subtopic.id} to={`/topics/${props.topic.id}/subtopics/${subtopic.id}`}>{subtopic.name}</Link>
>>>>>>> 0fc78da05aac7bc4edd20391bc17913698d156f6
              </div>
              <button onClick={() => handleDelete(subtopic)}>Delete</button>
            </div>
          </Grid.Column>
        )))}
    return null
  }

  const subtopicLinks = getSubtopicLinks()

  return (
    <div>
      <div className='subtopic-header'>
        <h2>{props.topic ? props.topic.name : null }</h2>
      </div>
       {subtopicLinks ? <SubtopicNew /> : null  }
       <Grid columns='two'>{subtopicLinks}</Grid>
    </div>
  )
}


export default TopicShow
