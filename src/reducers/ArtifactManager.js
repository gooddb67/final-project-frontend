export default function ArtifactManager(state = {artifacts: []}, action){
  switch (action.type) {
    case "ADD_ARTIFACT":
      return {...state, artifacts: state.artifacts.concat(action.payload)}
    case "ADD_COMMENT":
      const currentArtifact = state.artifacts.find(artifact => artifact.id === action.payload.artifact_id)
      currentArtifact.comments.push(action.payload)
      return {...state, artifacts: state.artifacts.concat(currentArtifact)}
    case "FETCHED_ARTIFACTS":
      return { ...state, artifacts: action.payload, isLoading: false };
    case "FETCHING_ARTIFACTS":
      return { ...state, isLoading: true };
    case "FILTER_ARTIFACTS":
      const filteredArtifacts = state.artifacts.filter(artifact => artifact.media === action.filter)
      return {...state, artifacts: filteredArtifacts}
    default:
      return state;
    }
}
