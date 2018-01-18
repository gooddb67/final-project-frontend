import React from 'react'

class TopicCard extends React.Component {

  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }


  handleDelete = () => {
    this.props.onTopicDelete(this.props.topic.id)
  }


  render(){
    const deleteTopic = {
      'font-size': '25px'
    }
    return(
      <div className="topic-card" onClick={this.handleClick}>
          <p id='topicName'>{this.props.topic.name}</p>
          <div id="deleteTopic" onClick={this.handleDelete}>
            X
          </div>
      </div>

    )
  }
}



export default TopicCard;
