import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import renderHTML from 'react-render-html';
import { Embed } from 'semantic-ui-react'


class ArtifactCard extends React.Component {

  // handleClick = () => {
  //   this.props.onSelect(this.props.topic)
  // }
   mediaRender(){
    if (this.props.artifact.media === 'Image') {
      return renderHTML(`<img src="${this.props.artifact.url}" />`)
    }else if(this.props.artifact.media === 'Link'){
      return renderHTML(`<a href="${this.props.artifact.url}"target="_blank"> ${this.props.artifact.url} </a>`)
    }else{
      return renderHTML(this.props.artifact.url)
    }
  }


  render(){


    return(
      <Container>
        <Segment compact={true}>
          {this.mediaRender()}
        </Segment>
      </Container>
    )
  }
}

export default ArtifactCard;
