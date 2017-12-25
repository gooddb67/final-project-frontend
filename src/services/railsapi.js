export default class RailsApi {
  static fetchTopics() {
    return fetch(
      "http://localhost:3000/api/v1/topics"
    ).then(res => res.json())
  }

  static fetchArtifacts(){
    return fetch(
      `http://localhost:3000/api/v1/artifacts`
    ).then(res => res.json())
  }

  static createTopic(params) {
    return fetch(`http://localhost:3000/api/v1/topics/`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static deleteTopic(params){
    return fetch(`http://localhost:3000/api/v1/topics/${params}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static createArtifact(params) {
    return fetch(`http://localhost:3000/api/v1/topics/${params.topic_id}/subtopics/${params.subtopic_id}/artifacts`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static createComment(params){
    return fetch(`http://localhost:3000/api/v1/artifacts/${params.artifact_id}/comments`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static createSubtopic(params) {
    return fetch(`http://localhost:3000/api/v1/topics/${params.topic_id}/subtopics`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

  static deleteArtifact(params){
    return fetch(`http://localhost:3000/api/v1/artifacts/${params}`, {
      method: 'delete'
    }).then(res => res.json())
  }

  static deleteSubtopic(params){
    console.log('railsapi', params)
    return fetch(`http://localhost:3000/api/v1/subtopics/${params}`, {
      method: 'delete'
    }).then(res => res.json())
  }

}
