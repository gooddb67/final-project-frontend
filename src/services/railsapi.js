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


}
