import React from 'react'



class TopicCard extends React.Component {
  
  handleClick = () => {
    this.props.onSelect(this.props.topic)
  }
  render(){
    return(
      <div onClick={this.handleClick}>{this.props.topic.name}</div>
    )
  }
}



export default TopicCard;
