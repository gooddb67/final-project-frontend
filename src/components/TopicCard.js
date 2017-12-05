import React from 'react'

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
