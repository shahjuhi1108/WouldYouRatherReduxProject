import { receiveUsers } from '../actions/users'
import { getUsers } from '../utils/api'

export function handleLoginPageData () {
    return (dispatch) => {
        return getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}