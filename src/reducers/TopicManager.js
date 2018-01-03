export default function TopicManager(state = { topics: [], articles: [], isLoading: false, selectTopic: {}, selectSubtopic: {},
 },
  action){
  switch (action.type) {
    case "ADD_TOPIC":
      return {...state, topics: state.topics.concat(action.payload) }
    case "ADD_SUBTOPIC":
        const newTopicArray = state.topics.map(t => {
          if (t.id === action.payload.topic_id) {
            const newSubArr = t.subtopics.slice()
            newSubArr.push(action.payload)
            t.subtopics = newSubArr
          }
          return t
        })
        return {...state, topics: newTopicArray}
    case "FETCHED_TOPICS":
      return { ...state, topics: action.payload, isLoading: false };
    case "FETCHED_ARTICLES":
      return {...state, articles: action.payload}
    case "FETCHING_TOPICS":
      return { ...state, isLoading: true };
    case "SELECTED_TOPIC":
        return {...state, selectTopic: action.payload}
    case "SELECTED_SUBTOPIC":
        return {...state, selectSubtopic: action.payload}
    case "DELETE_TOPIC":
      const topics = state.topics.filter(topic => topic.id !== action.payload.id);
      return {...state, topics: topics, selectTopic: {}}
      case 'DELETE_SUBTOPIC':
        const selectedTopic = state.selectTopic
        const newSubtopicArr = selectedTopic.subtopics.slice()
        const filteredSubTopicArr = newSubtopicArr.filter(subtopic => subtopic.id !== action.payload.id)
        selectedTopic.subtopics = filteredSubTopicArr
        const newTopics = state.topics.slice()
        return {...state, topics: newTopics}
    default:
      return state;
  }
}
