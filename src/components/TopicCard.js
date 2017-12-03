import React from 'react'
import { Card, Button, Segment, Dropdown, Menu } from 'semantic-ui-react'

const options = [
{ key: 1, text: 'Choice 1', value: 1 },
{ key: 2, text: 'Choice 2', value: 2 },
{ key: 3, text: 'Choice 3', value: 3 },
]

class TopicCard extends React.Component {

  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }


  // handleDelete = () => {
  //   this.props.onDelete(this.props.topic.id)
  // }


  render(){
    return(
      <div className="topic-card" onClick={this.handleClick}>

          <div className='topic-card-container'>
            {this.props.topic.name}
          </div>


      </div>
    )
  }
}



export default TopicCard;
