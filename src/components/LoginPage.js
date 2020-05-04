import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/shared'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container'



const styles = {
    root: {
        maxWidth: 450,
        margin: 5
    },
    formControl: {
        minWidth: 400,
    },
}


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

        const { users, classes } = this.props

        return (
            <Container maxWidth="sm">
                <Card className={classes.root}>
                <CardHeader
                    title={<h5>Welcome to the Would You Rather App</h5>
                    }
                >
                </CardHeader>
                    <Container>
                        
                        <h4>Please sign in to continue</h4>
                        <div>
                            <h3>Sign in</h3>
                            <Select
                                value={this.state.selectedUser}
                                onChange={this.handleChange}
                                className={classes.formControl}
                            >
                                {users.map((user) => (
                                    <MenuItem key={user.id} value={user.id}> {user.name} </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <Button
                            onClick={this.handleClick}
                            type='submit'
                            disabled={this.state.selectedUser === ''}
                            variant="outlined" color="primary"
                            fullWidth
                        >
                            Sign in
                        </Button>
                    </Container>
                </Card>
            </Container>

        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users).map((id) => { return { "id": id, "name": users[id].name } })
    }
}

export default withStyles(styles)(connect(mapStateToProps)(LoginPage))