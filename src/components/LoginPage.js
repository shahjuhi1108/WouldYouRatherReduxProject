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
import CardMedia from '@material-ui/core/CardMedia'
import { Redirect } from 'react-router-dom'



const styles = {
    root: {
        maxWidth: 450,
        margin: 5
    },
    formControl: {
        minWidth: 400,
        padding: 10,
        margin: 5
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    center: {
        margin: 5,
        padding: 10
    }
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

        const { users, classes, authedUser } = this.props

        const from = this.props.location.state.from

        if (authedUser !== '') {
            return <Redirect to={ from === '/login' ? '/' : from} />
        }

        return (
            <Container maxWidth="sm">
                <Card className={classes.root}>
                    <CardHeader
                        title="Welcome to the Would You Rather App"
                        subheader="Please sign in to continue"
                    />
                    <CardMedia className={classes.media} image="https://cdn.auth0.com/blog/react-redux/logo.png" title="React-Redux-Logo" />
                    <Container className={classes.center}>
                        <Select
                            value={this.state.selectedUser}
                            onChange={this.handleChange}
                            className={classes.formControl}
                        >
                            {users.map((user) => (
                                <MenuItem key={user.id} value={user.id}> {user.name} </MenuItem>
                            ))}
                        </Select>
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

function mapStateToProps({ authedUser, users }, props) {

    return {
        authedUser: authedUser,
        users: Object.keys(users).map((id) => { return { "id": id, "name": users[id].name } })
    }
}

export default withStyles(styles)(connect(mapStateToProps)(LoginPage))