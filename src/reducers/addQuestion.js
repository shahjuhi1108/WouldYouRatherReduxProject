import { ADD_QUESTION } from '../actions/addQuestion'

export default function users (state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION :
      return {
        ...state,
        ...action.question
      }
    default :
      return state
  }
}