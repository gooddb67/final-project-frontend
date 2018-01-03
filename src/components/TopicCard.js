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
      float: 'right',
      'font-size': '25px'
    }
    return(
      <div>
      <div className="topic-card" onClick={this.handleClick}>
          <div className='topic-card-container'>
            {this.props.topic.name}
            <span id='deleteSub' style={deleteTopic} onClick={this.handleDelete}>X</span>
          </div>
      </div>
    </div>

    )
  }
}



export default TopicCard;
