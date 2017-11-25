export default function TopicManager(state = { topics: [], isLoading: false, selectTopic: {},
 },
  action){
  switch (action.type) {
    case "FETCHED_TOPICS":
      return { ...state, topics: action.payload, isLoading: false };
    case "FETCHING_TOPICS":
      return { ...state, isLoading: true };
    case "SELECTED_TOPIC":
        return {...state, selectTopic: action.payload}
    default:
      return state;
  }
}
