import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from '../actions'

const auth = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

export default auth
