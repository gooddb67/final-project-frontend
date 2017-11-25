export default function ArtifactManager(state = {artifacts: []}, action){
  switch (action.type) {
    case "FETCHED_ARTIFACTS":
      return { ...state, topics: action.payload, isLoading: false };
    case "FETCHING_ARTIFACTS":
      return { ...state, isLoading: true };
    default:
      return state;
    }
}
