import React from 'react'
import {Link} from 'react-router-dom'
//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Homepage extends React.Component{

  handleClick(){
    this.props.history.push('/topics')
  }



  render(){
    const wrapperStyle = {
      'margin-left': '0',
      'margin-right': '0'
    }
    return(
      <div className='wrapper'>
        <section className="hero-image">
          <div className='logo-wrap'>
            <h1>URLink</h1>
          </div>
        </section>
        <section className="about-container">
          <div className="about-item"></div>
            <h3>Collect</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat. Maecenas pellentesque ipsum id augue congue, a ultrices est lobortis. Proin fringilla dui ut sem luctus maximus. Cras eu sapien lectus. Cras id nulla
            </p>
          <div className="about-item"></div>
            <h3>Annotate</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat. Maecenas pellentesque ipsum id augue congue, a ultrices est lobortis. Proin fringilla dui ut sem luctus maximus. Cras eu sapien lectus. Cras id nulla
            </p>
          <div className="about-item"></div>
            <h3>Discover</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat. Maecenas pellentesque ipsum id augue congue, a ultrices est lobortis. Proin fringilla dui ut sem luctus maximus. Cras eu sapien lectus. Cras id nulla
            </p>
        </section>
        <section className="made-with-container">
          <h2>Made With</h2>
          <div className="made-with-item">
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat. Maecenas pellentesque ipsum id augue congue, a ultrices est lobortis. Proin fringilla dui ut sem luctus maximus. Cras eu sapien lectus. Cras id nulla
            </p>
          </div>
          <div className="made-with-item">
            <h3>Redux</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat. Maecenas pellentesque ipsum id augue congue, a ultrices est lobortis. Proin fringilla dui ut sem luctus maximus. Cras eu sapien lectus. Cras id nulla
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Homepage
