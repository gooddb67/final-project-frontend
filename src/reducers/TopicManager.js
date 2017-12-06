export default function TopicManager(state = { topics: [], isLoading: false, selectTopic: {},
 },
  action){
  switch (action.type) {
    case "ADD_TOPIC":
      return {...state, topics: state.topics.concat(action.payload) }
    case "ADD_SUBTOPIC":
        return {...state, selectTopic: {...state.selectTopic, subtopics: [...state.selectTopic.subtopics, action.payload]}}
    case "FETCHED_TOPICS":
      return { ...state, topics: action.payload, isLoading: false };
    case "FETCHING_TOPICS":
      return { ...state, isLoading: true };
    case "SELECTED_TOPIC":
        return {...state, selectTopic: action.payload}
    case "DELETE_TOPIC":
      const topics = state.topics.filter(topic => topic.id !== action.id);
      return {topics}
    case 'DELETE_SUBTOPIC':
      const topic = state.topics.find(topic => topic.id === action.payload.topic_id)
            topic.subtopics.filter(subtopic => subtopic.id !== action.payload.id)
      return {topics}
    default:
      return state;
  }
}
