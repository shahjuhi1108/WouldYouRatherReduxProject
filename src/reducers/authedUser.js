import { SET_AUTHED_USER } from '../actions/shared'

export default function authedUser (state = '', action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      return action.id
    default :
      return state
  }
}
