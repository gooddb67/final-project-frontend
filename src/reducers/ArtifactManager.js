export default function ArtifactManager(state = {artifacts: []}, action){
  switch (action.type) {
    case "ADD_ARTIFACT":
      return {...state, artifacts: state.artifacts.concat(action.payload)}
    case "ADD_COMMENT":
      return {...state}
    case "FETCHED_ARTIFACTS":
      return { ...state, artifacts: action.payload, isLoading: false };
    case "FETCHING_ARTIFACTS":
      return { ...state, isLoading: true };
    default:
      return state;
    }
}
