import React from 'react'
import {fetchArticles} from '../actions/topics'
import {createArtifact, setUrl} from '../actions/artifacts'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import {Segment, Button, Grid, Header} from 'semantic-ui-react'

class Times extends React.Component {

    state = {
      media: 'Link',
      // url: this.props.artifactUrl,
      topic_id: null,
      subtopic_id: null
    }


    handleClick(topic){
      this.props.onSelect(topic)
      this.setState({
        topic_id: topic.id
      })
    }

    handleSubtopicClick(subtopic){
      this.props.onSubtopicSelect(subtopic)
      this.setState({
        subtopic_id: subtopic.id
      })
      this.props.fetchArticles(subtopic.name)
    }

    handleAdd(url){
      const params = {...this.state, url}
      this.props.createArtifact(params)
      this.props.history.push('/topics')
    }


     topics(){
        return this.props.topics.map(topic => {
         return <div className="topic-card-discover" onClick={() => this.handleClick(topic)}>
           <div className="topic-card-container">
             {topic.name}
          </div>
        </div>
       })
    }

    subtopics(){
      return this.props.selectTopic.subtopics ?
       this.props.selectTopic.subtopics.map(subtopic => {
        return <div className='subtopic-card-discover' textAlign='center' onClick={() => this.handleSubtopicClick(subtopic)}>
          <div className='subtopic-card-container'>
            {subtopic.name}
          </div>
       </div>
      }) : null
    }

    articles(){

      const marginHeight = {'margin': '15px', 'height': 'auto'}
       return this.props.articles.response ?
        this.props.articles.response.docs.map(article =>
        <div>
            <Segment style={marginHeight}><a href={article.web_url} target="_blank">{article.headline.main}</a>
            <Button size='mini' floated='right' onClick={() => this.handleAdd(article.web_url)}>Add as Artifact</Button>
            </Segment>
          </div>)
        : null
    }

  render(){
    const currentTopic = this.props.selectTopic.name

    return(
      <div>
        <div className='discover-container'>
          {this.topics()}
          {this.subtopics()}
        </div>

        {this.articles()}

      </div>

    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchArticles: (term) => {
      dispatch(fetchArticles(term))
    },
    createArtifact: (params) => {
      dispatch(createArtifact(params))
    },
    setUrl: (url) => {
      dispatch(setUrl(url))
    }
  }
}

function mapStateToProps(state){
  return{
    articles: state.topics.articles,
    topics: state.topics.topics,
    artifacts: state.artifacts.artifacts,
    selectTopic: state.topics.selectTopic,
    selectSubtopic: state.topics.selectSubtopic,
    artifactUrl: state.artifacts.artifactUrl
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Times);
