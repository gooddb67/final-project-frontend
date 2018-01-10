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

export function filterArtifacts(filter){
  return{
    type: 'FILTER_ARTIFACTS',
    filter: filter
  }
}

export function setUrl(url){
  return {
    type: 'SET_URL',
    payload: url
  }
}

export function selectedArtifact(artifact) {
  return{
    type: "SELECTED_ARTIFACT",
    payload: artifact
  }
}

export function deleteArtifact(id){
  return{
    type: 'DELETE_ARTIFACT',
    payload: id
  }
}

export function deleteComment(comment){
  return{
    type: 'DELETE_COMMENT',
    payload: comment
  }
}

export function createComment(params){
  return function(dispatch){
    RailsApi.createComment(params).then(json => console.log('createComment', json))
  }
}

export function deleteCommentFromDb(params){
  return function(dispatch){
    RailsApi.deleteComment(params).then(json => dispatch(deleteComment(json)))
  }
}

export function deleteArtifactFromDb(params){
  return function(dispatch){
    RailsApi.deleteArtifact(params).then(json => dispatch(deleteArtifact(json.id)))
  }
}

export function createArtifact(params){
  return function(dispatch){
    RailsApi.createArtifact(params).then(json => dispatch(addArtifact(json)))
  }
}
