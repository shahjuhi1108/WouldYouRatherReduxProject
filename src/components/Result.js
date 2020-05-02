import React, { Component } from 'react'
import { lighten, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import { Card, Grid, TableCell, TableBody, Container, Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';



const styles = {
    root: {
        maxWidth: 500,
        margin: 8,
    },

    paper: {
        margin: 8,
        padding: 10
    }

}

const BorderLinearProgress = withStyles({
    root: {
        height: 25,
        backgroundColor: lighten('#b2dfdb', 0.5),
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#00695c',
    },
})(LinearProgress);



class Result extends Component {
    render() {

        const { classes } = this.props

        return (

            <Card className={classes.root}>
                <CardHeader
                    title={"Asked by : author"}
                >
                </CardHeader>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Container>
                            <Avatar />
                        </Container>
                    </Grid>
                    <Grid item xs={8}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Results:
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Container >
                                                <Paper variant="outlined" className={classes.paper}>
                                                    <Typography variant="caption" >
                                                        Would You Rather optionOne - Highlight chosen one

                                                    </Typography>

                                                    <BorderLinearProgress
                                                        className={classes.margin}
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={50}
                                                    />
                                                </Paper>

                                            </Container>
                                            <Container>
                                                <Paper variant="outlined" className={classes.paper}>
                                                    <Typography variant="caption" >
                                                        Would You Rather optionOne - Highlight chosen one

                                                    </Typography>
                                                    <BorderLinearProgress
                                                        className={classes.margin}
                                                        variant="determinate"
                                                        color="secondary"
                                                        value={50}
                                                    />
                                                </Paper>

                                            </Container>
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

Result.propTypes = {
    questionId: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
    return {
        users: state.users,
        questions: state.questions
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Result))