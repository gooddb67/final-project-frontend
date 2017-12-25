import React from 'react'

class TopicCard extends React.Component {

  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }


  handleDelete = () => {
    this.props.onTopicDelete(this.props.topic.id)
  }


  render(){
    return(
      <div>
      <div className="topic-card" onClick={this.handleClick}>
          <div className='topic-card-container'>
            {this.props.topic.name}
          </div>
      </div>
      <button onClick={this.handleDelete}>Delete</button>
    </div>

    )
  }
}



export default TopicCard;
