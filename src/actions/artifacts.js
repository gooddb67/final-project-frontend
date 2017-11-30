import RailsApi from "../services/railsapi";

export function fetchArtifacts(){
  return function(dispatch){
    dispatch(fetchingArtifacts());
    RailsApi.fetchArtifacts().then(json => {
      dispatch(fetchedArtifacts(json))
    })
  }
}


function fetchedArtifacts(artifacts) {
  return {
    type: "FETCHED_ARTIFACTS",
    payload: artifacts
  };
}

function fetchingArtifacts() {
  return { type: "FETCHING_ARTIFACTS" };
}

export function addArtifact(artifact){
  return {
    type: "ADD_ARTIFACT",
    payload: artifact
  }
}

export function addComment(comment){
  return{
    type: 'ADD_COMMENT',
    payload: comment
  }
}

export function createComment(params){
  return function(dispatch){
    RailsApi.createComment(params).then(json => dispatch(addComment(json)))
  }
}

export function createArtifact(params){
  return function(dispatch){
    RailsApi.createArtifact(params).then(json => dispatch(addArtifact(json)))
  }
}
