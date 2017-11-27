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

  static createSubtopic(params) {
    console.log(params)
    return fetch(`http://localhost:3000/api/v1/topics/${params.topic_id}/subtopics`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }

}
