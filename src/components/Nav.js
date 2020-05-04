import React from 'react'
import { NavLink } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'


const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

function Nav(props) {

    const user = props.authedUser
    const classes = styles();

    return (
        <Grid container spacing={3}>
            <Grid item>
                <NavLink to='/home' exact activeClassName='active'>
                    Home
                </NavLink>
            </Grid>

            <Grid item>
                <NavLink to='/new' exact activeClassName='active'>
                    New Question
                </NavLink>
            </Grid>

            <Grid item>
                <NavLink to='/leader' exact activeClassName='active'>
                    Leader Board
                </NavLink>
            </Grid>

            <Grid item>
                Hello, {props.users[user].name}
            </Grid>

            <Grid item >
                <Avatar alt={props.users[user].name} src={props.users[user].avatarURL} className={classes.small}></Avatar>
            </Grid>

            <Grid item>
                <NavLink to='/' exact activeClassName='active'>
                    Logout
                </NavLink>
            </Grid>

        </Grid>
    )
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser,
        users: state.users
    }
}

export default connect(mapStateToProps)(Nav)