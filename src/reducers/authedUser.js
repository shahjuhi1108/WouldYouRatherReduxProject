import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/shared'

export default function authedUser (state = '', action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      return action.id

    case REMOVE_AUTHED_USER :
      return ''

    default :
      return state
  }
}
