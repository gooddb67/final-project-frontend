import RailsApi from "../services/railsapi";

export function fetchTopics(){
  return function(dispatch){
    dispatch(fetchingTopics());
    RailsApi.fetchTopics().then(json => {
      dispatch(fetchedTopics(json))
    })
  }
}

function fetchedTopics(topics) {
  return {
    type: "FETCHED_TOPICS",
    payload: topics
  };
}

function fetchingTopics() {
  return { type: "FETCHING_TOPICS" };
}

export function selectTopic(topic) {
  return{
    type: "SELECTED_TOPIC",
    payload: topic
  }
}

export function addTopic(topic){
  return{
    type: "ADD_TOPIC",
    payload: topic
  }
}

export function addSubtopic(subtopic){
  return{
    type: "ADD_SUBTOPIC",
    payload: subtopic
  }
}

export function deleteTopic(id){
    return{
    type: "DELETE_TOPIC",
    payload: id
  }
}

export function createTopic(params){
  return function(dispatch){
    RailsApi.createTopic(params).then(json => dispatch(addTopic(json)))
  }
}

export function destroyTopicFromDb(params){
  console.log("heheheh")
  return function(dispatch){
    RailsApi.deleteTopic(params).then(json => dispatch(deleteTopic(json)))
  }
}

export function createSubtopic(params){
  return function(dispatch){
    RailsApi.createSubtopic(params).then(json => dispatch(addSubtopic(json)))
  }
}
