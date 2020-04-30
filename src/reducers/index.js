import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import addQuestion from './addQuestion'

export default combineReducers({
    authedUser,
    users,
    addQuestion
})