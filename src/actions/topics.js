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
