import { combineReducers } from 'redux'
import auth from './auth'
import video from './video'

const reducer = combineReducers({
  auth,
  video
})

export default reducer
