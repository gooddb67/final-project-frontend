export default function TopicManager(state = { topics: [], isLoading: false },
  action){
  switch (action.type) {
    case "FETCHED_TOPICS":
      return { ...state, topics: action.payload, isLoading: false };
    case "FETCHING_TOPICS":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
