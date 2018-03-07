import React from 'react'
import {Link} from 'react-router-dom'
//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Homepage extends React.Component{

  handleClick(){
    this.props.history.push('/topics')
  }

  render(){

    return(
    <div>
      <section className="hero-image">
        <div className='logo-wrap'>
          <h1>URLink</h1>
           <Link to='/topics'><button id="demo-btn">DEMO</button></Link>
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
            <p id='react-text'>
              User interface developed with React
            </p>
            <svg id='react-logo' version="1.1" height="155px" viewBox="0 0 184 166">
              <g transform="translate(92 83)">
                <circle fill="#fff" r="16" />
                <g fill="none" stroke="#fff" stroke-width="8">
                  <ellipse rx="84" ry="32" />
                  <ellipse rx="84" ry="32" transform="rotate(120)" />
                  <ellipse rx="84" ry="32" transform="rotate(60)" />
                </g>
              </g>
            </svg>
          </div>
          <div className="made-with-item redux">
            <svg id='redux-logo' xmlns="http://www.w3.org/2000/svg" height="160px" viewBox="0 0 100 100">
              <g fill="white">
                <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/>
                <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/>
                <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
              </g>
            </svg>
            <p id="redux-text">
              Application state managed with Redux
            </p>
          </div>
        </section>
        </div>
      </div>
    )
  }
}

export default Homepage
