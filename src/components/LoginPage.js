import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/shared'


class LoginPage extends Component {

    state = {
        selectedUser: ''
    }

    handleChange = (event) => {
        const selectedUser = event.target.value

        this.setState(() => ({
            selectedUser
        }))
    }

    handleClick = (event) => {
        event.preventDefault()

        const { selectedUser } = this.state

        const { dispatch } = this.props
        
        dispatch(setAuthedUser(selectedUser))

        this.setState(() => ({
            selectedUser: ''
        }))

    }

    render() {

        const { users } = this.props

        return (
            <div className='center'>
                <div>
                    <h3>Welcome to the Would You Rather App</h3>
                        <h4>Please sign in to continue</h4>
                        <div>
                            <h3>Sign in</h3>
                            <Select 
                            value={this.state.selectedUser}
                            onChange={this.handleChange}
                            >
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}> {user.name} </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <button
                        onClick={this.handleClick}
                        type='submit'
                        disabled={this.state.selectedUser === ''}
                        >
                            Sign in
                        </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
      users: Object.keys(users).map((id) => {return {"id": id, "name": users[id].name}})
    }
  }

export default connect(mapStateToProps)(LoginPage)