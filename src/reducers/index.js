import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import addQuestion from './addQuestion'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    authedUser,
    users,
    addQuestion,
    questions,
    loading: loadingBarReducer
})