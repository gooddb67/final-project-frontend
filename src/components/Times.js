import React from 'react'
import {fetchArticles} from '../actions/topics'
import {createArtifact, setUrl} from '../actions/artifacts'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'

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
      console.log(this.props)
      const params = {...this.state, url}
      this.props.createArtifact(params)
      this.props.history.push('/topics')
    }


     topics(){
        return this.props.topics.map(topic => {
         return <li onClick={() => this.handleClick(topic)}>{topic.name}</li>
       })
    }

    subtopics(){
      return this.props.selectTopic.subtopics ?
       this.props.selectTopic.subtopics.map(subtopic => {
        return <p onClick={() => this.handleSubtopicClick(subtopic)}>{subtopic.name}</p>
      }) : null
    }

    articles(){
       return this.props.articles.response ?
        this.props.articles.response.docs.map(article =>
        <div>
          <div>
            <li><a href={article.web_url} target="_blank">{article.web_url}</a></li>
            <p>{article.snippet}</p>
          </div>
        <button onClick={() => this.handleAdd(article.web_url)}>Add as Artifact</button> </div>)
        : null
    }

  render(){
    const currentTopic = this.props.selectTopic.name
    const noBullets
    return(
      <div>
        <ul>{this.topics()}</ul>
        <h2>{currentTopic}</h2>
      <div>{this.subtopics()}</div>
      <ul style={'list-style-type: none'}>{this.articles()}</ul>
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
