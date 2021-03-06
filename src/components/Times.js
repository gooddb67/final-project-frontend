import React from 'react';
import { fetchArticles } from '../actions/topics';
import { createArtifact, setUrl } from '../actions/artifacts';
import { connect } from 'react-redux';
import { Segment, Button, Grid, Form } from 'semantic-ui-react';

class Times extends React.Component {
  state = {
    media: 'Link',
    caption: '',
    topic_id: null,
    subtopic_id: null,
    showArticles: null
  };

  componentDidMount() {
    this.setState({
      showArticles: false
    });
  }

  handleClick(topic) {
    this.props.onSelect(topic);
    this.setState({
      topic_id: topic.id
    });
  }

  handleCaptionChange = event => {
    this.setState({
      caption: event.target.value
    });
  };

  handleSubtopicClick(subtopic) {
    this.props.onSubtopicSelect(subtopic);
    this.setState({
      subtopic_id: subtopic.id
    });
    this.setState({ showArticles: true });
    this.props.fetchArticles(subtopic.name);
  }

  handleAdd(url) {
    const params = { ...this.state, url };
    if (!params.topic_id) {
      alert('Please select a topic');
    } else {
      this.props.createArtifact(params);
      this.props.history.push('/topics');
    }
  }

  topics() {
    return this.props.topics.map((topic, idx) => {
      return topic.id === this.props.selectTopic.id ? (
        <div
          key={idx}
          className="topic-card-discover currentBorder"
          onClick={() => this.handleClick(topic)}
        >
          <div className="topic-card-container">{topic.name}</div>
        </div>
      ) : (
        <div
          key={idx}
          className="topic-card-discover"
          onClick={() => this.handleClick(topic)}
        >
          <div className="topic-card-container">{topic.name}</div>
        </div>
      );
    });
  }

  subtopics() {
    return this.props.selectTopic.subtopics
      ? this.props.selectTopic.subtopics.map((subtopic, idx) => {
          return (
            <div
              key={idx}
              className="subtopic-card-discover"
              textalign="center"
              onClick={() => this.handleSubtopicClick(subtopic)}
            >
              {subtopic.name}
            </div>
          );
        })
      : null;
  }

  articles() {
    const marginHeight = { margin: '15px', height: 'auto' };
    return this.props.articles.response
      ? this.props.articles.response.docs.map((article, idx) => (
          <Segment.Group key={idx}>
            <Segment style={marginHeight}>
              <a href={article.web_url} target="_blank">
                {article.headline.main}
              </a>
            </Segment>
            <Segment.Group horizontal>
              <Segment>
                <Grid columns="two">
                  <Grid.Row>
                    <Grid.Column>
                      <Form>
                        <Form.Input
                          placeholder="Add Caption"
                          size="mini"
                          type="text"
                          onChange={this.handleCaptionChange}
                        />
                      </Form>
                    </Grid.Column>
                    <Grid.Column>
                      <Button
                        size="mini"
                        floated="right"
                        onClick={() => this.handleAdd(article.web_url)}
                      >
                        Add as Artifact
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Segment.Group>
          </Segment.Group>
        ))
      : null;
  }

  render() {
    const currentStyle = { border: '3px solid coral' };
    const topic = this.props.selectTopic;
    topic.style = currentStyle;

    return (
      <div>
        <div className="discover-container">
          {this.topics()}
          {this.subtopics()}
        </div>
        {this.state.showArticles ? this.articles() : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: term => {
      dispatch(fetchArticles(term));
    },
    createArtifact: params => {
      dispatch(createArtifact(params));
    },
    setUrl: url => {
      dispatch(setUrl(url));
    }
  };
}

function mapStateToProps(state) {
  return {
    articles: state.topics.articles,
    topics: state.topics.topics,
    artifacts: state.artifacts.artifacts,
    selectTopic: state.topics.selectTopic,
    selectSubtopic: state.topics.selectSubtopic,
    artifactUrl: state.artifacts.artifactUrl
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Times);
