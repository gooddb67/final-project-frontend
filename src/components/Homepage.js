import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class Homepage extends React.Component{

  handleClick(){
    this.props.history.push('/topics')
  }

  render(){
    return(
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' color='grey' textAlign='center'>
              URLink
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Link to='/topics'> Demo</Link>
                {/* <Button color='#738685' fluid size='large'>Demo</Button> */}
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default Homepage
