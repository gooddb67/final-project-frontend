import React from 'react'
import {fetchArticles} from '../actions/topics'
import {createArtifact, setUrl} from '../actions/artifacts'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import {Segment, Button, Grid, Header, Input, Form} from 'semantic-ui-react'

class Times extends React.Component {

    state = {
      media: 'Link',
      caption: '',
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

    handleCaptionChange = event => {
      this.setState({
        caption: event.target.value
      });
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
          return topic.id === this.props.selectTopic.id ?
          <div className="topic-card-discover currentBorder" onClick={() => this.handleClick(topic)}>
           <div className="topic-card-container">
             {topic.name}
          </div>
        </div> :
        <div className="topic-card-discover" onClick={() => this.handleClick(topic)}>
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
            {subtopic.name}
       </div>
      }) : null
    }

    articles(){

      const marginHeight = {'margin': '15px', 'height': 'auto'}
       return this.props.articles.response ?
        this.props.articles.response.docs.map(article =>
        <div>
          <Segment.Group>
            <Segment style={marginHeight}><a href={article.web_url} target="_blank">{article.headline.main}</a>
            </Segment>
            <Segment.Group horizontal>
              <Segment>
                <Grid columns='two'>
                  <Grid.Row>
                    <Grid.Column>
                    <Form>
                      <Form.Input placeholder='Add Caption' size='mini' type='text' onChange={this.handleCaptionChange}/>
                    </Form>
                    </Grid.Column>
                    <Grid.Column>
                      <Button size='mini' floated='right' onClick={() => this.handleAdd(article.web_url)}>Add as Artifact</Button>
                  </Grid.Column>
                </Grid.Row>
                </Grid>
              </Segment>
            </Segment.Group>
          </Segment.Group>
          </div>)
        : null
    }

  render(){
    const currentTopic = this.props.selectTopic.name
    const currentStyle = {border: '3px solid coral'}
    const topic = this.props.selectTopic
    topic.style = currentStyle

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
