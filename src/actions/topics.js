import RailsApi from "../services/railsapi";
import TimesApi from "../services/timesapi"

export function fetchTopics(){
  return function(dispatch){
    dispatch(fetchingTopics());
    RailsApi.fetchTopics().then(json => {
      dispatch(fetchedTopics(json))
    })
  }
}

export function fetchArticles(term){
  return function(dispatch){
    TimesApi.fetchArticles(term).then(json =>
      dispatch(fetchedArticles(json))
    )
  }
}

function fetchedTopics(topics) {
  return {
    type: "FETCHED_TOPICS",
    payload: topics
  };
}

function fetchedArticles(articles){
  return {
    type: "FETCHED_ARTICLES",
    payload: articles
  }
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

export function selectSubtopic(subtopic) {
  return{
    type: "SELECTED_SUBTOPIC",
    payload: subtopic
  }
}

export function addTopic(topic){
  return{
    type: "ADD_TOPIC",
    payload: topic
  }
}

export function addSubtopic(subtopic) {
  return{
    type: "ADD_SUBTOPIC",
    payload: subtopic
  }
}

export function deleteSubtopic(subtopic){
    return{
    type: "DELETE_SUBTOPIC",
    payload: subtopic
  }
}

export function createTopic(params){
  return function(dispatch){
    RailsApi.createTopic(params).then(json => dispatch(addTopic(json)))
  }
}

export function createSubtopic(params){
  return function(dispatch){
    RailsApi.createSubtopic(params).then(json => dispatch(addSubtopic(json)))
  }
}

export function deleteSubtopicFromDb(params){
  return function(dispatch){
    RailsApi.deleteSubtopic(params).then(json => dispatch(deleteSubtopic(json)))
  }
}
