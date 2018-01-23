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
    <div>
      <section className="hero-image">
        <div className='logo-wrap'>
          <h1>URLink</h1>
        </div>
      </section>
      <div className='wrapper'>
        <section className="about-container">
          <div className="about-item">
            <h3>Collect</h3>
            <p>
              Aggregate resources found online
            </p>
          </div>
          <div className="about-item middle-item">
            <h3>Discover</h3>
            <p>
              Explore articles via the New York Times API
            </p>
          </div>
          <div className="about-item">
            <h3>Analyze</h3>
            <p>
              Visualize your findings using Chart.js
            </p>
          </div>
        </section>
        <section className="made-with-container">

          <div className="made-with-item react">
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erattus. Cras id nulla
            </p>
          </div>
          <div className="made-with-item redux">
            <h3>Redux</h3>
            {/* <img src="https://pbs.twimg.com/media/Cg_NJDQWIAAiaK2.jpg" height="90" width="90"></img> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante quam, venenatis nec neque eu, scelerisque finibus enim. Praesent vel magna erat.
            </p>
          </div>
        </section>
        </div>
      </div>
    )
  }
}

export default Homepage
