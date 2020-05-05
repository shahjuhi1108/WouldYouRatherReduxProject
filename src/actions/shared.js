import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (userId) {
  return {
    type: SET_AUTHED_USER,
    id: userId,
  }
}

export function handleInitialData () {
    return (dispatch) => {
      dispatch(showLoading())
      return getInitialData()
        .then(({ users, questions }) => {
          dispatch(receiveUsers(users))
          dispatch(receiveQuestions(questions))
          dispatch(hideLoading())
        })
    }
}
  
export function removeAuthedUser () {
  return {
    type: REMOVE_AUTHED_USER,
  }
}