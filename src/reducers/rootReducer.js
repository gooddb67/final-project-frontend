import { combineReducers } from 'redux'
import TopicManager from './TopicManager'
import ArtifactManager from './ArtifactManager'

const rootReducer = combineReducers({
  topics: TopicManager,
  artifacts: ArtifactManager
})

export default rootReducer
