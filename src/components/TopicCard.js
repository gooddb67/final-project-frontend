import React from 'react'
import { Card } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



class TopicCard extends React.Component {

  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }

  handleDelete = () => {
    //this.props.onDelete(this.props.topic.id)
  }

  render(){
    return(
      <Card fluid >
        <Card.Content onClick={this.handleClick} textAlign='center'>
          {this.props.topic.name}
        </Card.Content>
        <Button onClick={this.handleDelete} negative floated="right">Delete</Button>
      </Card>
    )
  }
}



export default TopicCard;
