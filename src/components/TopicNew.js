import React from 'react'
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'


class TopicNew extends React.Component {

  state = {
    name: ''
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addMovie and history from the components props
    //const { addTopic, history } = this.props;
    // Create the movie with the Redux action
    //addTopic(this.state);
    // redirect to /movies route
    //history.push('/movies')
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input
          type="text"
          onChange={this.handleOnChange}
          placeholder="Add a Topic" />
        <Form.Button><input type="submit" value="Add Topic" /></Form.Button>
      </form>
    );
  }
}
export default TopicNew
//export default connect(null, { addTopic })(TopicNew)
