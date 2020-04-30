import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, TableCell } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'

const styles = {
    root: {
        maxWidth: 500,
        margin: 8
    },
    media: {
        height: 140,
    },
}

class LeaderTile extends Component {
    render() {

        const { user, classes } = this.props
        const answered = Object.keys(user.answers).length
        const created = user.questions.length

        return (
            <div>
                <Card className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}><Avatar alt={user.name} src={user.avatarURL} /> </Grid>
                        <Grid item xs={6}>
                            <TableContainer>
                                <TableHead>
                                    {user.name}
                                </TableHead>
                                <TableRow>
                                    <TableCell>Answered Questions</TableCell>
                                    <TableCell>{answered}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Created Questions</TableCell>
                                    <TableCell>{created}</TableCell>
                                </TableRow>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={3}>
                            <TableContainer>
                                <TableRow>
                                    Score
                            </TableRow>
                                <TableRow>
                                    {answered + created}
                                </TableRow>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}

LeaderTile.propTypes = {
    user: PropTypes.object.isRequired,
}

export default withStyles(styles)(LeaderTile)