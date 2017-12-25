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
        console.log(newTopicArray);
        //return {...state, topics: newTopicArray, selectTopic: {...state.selectTopic, subtopics: [...state.selectTopic.subtopics, action.payload]}}
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
    console.log(action)
      const topics = state.topics.filter(topic => topic.id !== action.payload.id);
      return {...state, topics: topics}
    case 'DELETE_SUBTOPIC':
      const topic = state.topics.find(topic => topic.id === action.payload.topic_id)
            topic.subtopics.filter(subtopic => subtopic.id !== action.payload.id)
      return {topics}
    default:
      return state;
  }
}
