import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Grid, TableCell, TableBody } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table';


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
            <Card className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}><Avatar alt={user.name} src={user.avatarURL} /> </Grid>
                    <Grid item xs={6}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            {user.name}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Answered Questions</TableCell>
                                        <TableCell>{answered}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Created Questions</TableCell>
                                        <TableCell>{created}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={3}>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            Score
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            {answered + created}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}

LeaderTile.propTypes = {
    user: PropTypes.object.isRequired,
}

export default withStyles(styles)(LeaderTile)