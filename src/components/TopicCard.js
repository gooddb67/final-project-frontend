import React from 'react'
import { Card } from 'semantic-ui-react'



class TopicCard extends React.Component {

  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }
  render(){
    return(
      <Card fluid onClick={this.handleClick}>
        <Card.Content textAlign='center'>
          {this.props.topic.name}
        </Card.Content>
      </Card>
    )
  }
}



export default TopicCard;
