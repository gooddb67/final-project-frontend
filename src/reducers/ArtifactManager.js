export default function ArtifactManager(state = {artifacts: [], currentArtifact: {}, selectedArtifact: {}}, action){
  switch (action.type) {
    case "ADD_ARTIFACT":
      return {...state, artifacts: state.artifacts.concat(action.payload)}
    case "ADD_COMMENT":
      const currentArtifact = state.artifacts.find(artifact => artifact.id === action.payload.artifact_id)
      currentArtifact.comments.push(action.payload)
      state.currentArtifact = currentArtifact
      return {...state, artifacts: state.artifacts}
    case "FETCHED_ARTIFACTS":
      return { ...state, artifacts: action.payload, isLoading: false };
    case "FETCHING_ARTIFACTS":
      return { ...state, isLoading: true };
    case "FILTER_ARTIFACTS":
      const filteredArtifacts = state.artifacts.filter(artifact => artifact.media === action.filter)
      return {...state, artifacts: filteredArtifacts}
    case "DELETE_ARTIFACT":
        const remainingArtifacts = state.artifacts.filter(artifact => artifact.id !== action.payload)
        return {...state, artifacts: remainingArtifacts}
    case "SELECTED_ARTIFACT":
      return {...state, selectedArtifact: action.payload}
    default:
      return state;
    }
}
