export default class RailsApi {
  static fetchTopics() {
    return fetch(
      "http://localhost:3000/api/v1/topics"
    ).then(res => res.json())
  }

  static fetchSubtopics(topicId, subtopicId) {
    return fetch(
      `http://localhost:3000/api/v1/topics/${topicId}/subtopics/${subtopicId}`
    ).then(res => res.json())
  }


}
