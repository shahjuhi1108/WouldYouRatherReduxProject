import React, { Component } from 'react'
import { lighten, withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import { Card, Grid, TableCell, TableBody, Container, Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'


const styles = {
    root: {
        maxWidth: 450,
        margin: 8,
    },

    paper: {
        maxWidth: 400,
        minWidth: 200,
        margin: 8,
        padding: 10
    },

    selectedPaper: {
        maxWidth: 400,
        minWidth: 200,
        margin: 8,
        padding: 10,
        backgroundColor: lighten('#b2dfdb', 0.7),
    }

}

const BorderLinearProgress = withStyles({
    root: {
        height: 25,
        backgroundColor: lighten('#b2dfdb', 0.3),
        margin: 5
    },
    bar: {
        borderRadius: 0,
        backgroundColor: '#00695c',
    },
})(LinearProgress);



class Result extends Component {
    render() {

        const { question_id, users, questions, classes, selectedOption } = this.props


        const one = questions[question_id].optionOne.votes.length
        const two = questions[question_id].optionTwo.votes.length

        const total = one + two

        return (

            <Card className={classes.root}>
                <Container>
                    <CardHeader
                        title={"Asked by : " + users[questions[question_id].author].name}
                    >
                    </CardHeader>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Container>
                                <Avatar alt={users[questions[question_id].author].name} src={users[questions[question_id].author].avatarURL} />
                            </Container>
                        </Grid>
                        <Grid item xs={10}>
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
                                                <Container>
                                                    <Paper variant="outlined" className={selectedOption === 'optionOne'
                                                        ? classes.selectedPaper
                                                        : classes.paper} >
                                                        <Typography variant="caption"  >
                                                            Would You Rather {questions[question_id].optionOne.text}
                                                        </Typography>

                                                        <BorderLinearProgress
                                                            className={classes.margin}
                                                            variant="determinate"
                                                            color="secondary"
                                                            value={(one / total) * 100}
                                                        />

                                                        <Typography align='center' variant="caption" display="block">
                                                            {one} out of {total} votes
                                                        </Typography>

                                                        <Typography align='center' variant="caption" display="block">
                                                            {`${((one / total) * 100).toFixed(1)}%`}
                                                        </Typography>

                                                    </Paper>
                                                </Container>
                                                <Container>
                                                    <Paper variant="outlined" className={selectedOption === 'optionTwo'
                                                        ? classes.selectedPaper
                                                        : classes.paper}>
                                                        <Typography variant="caption" >
                                                            Would You Rather {questions[question_id].optionTwo.text}
                                                        </Typography>

                                                        <BorderLinearProgress
                                                            className={classes.margin}
                                                            variant="determinate"
                                                            color="secondary"
                                                            value={(two / total) * 100}
                                                        />

                                                        <Typography align="center" variant="caption" display="block">
                                                            {two} out of {total} votes
                                                        </Typography>

                                                        <Typography align='center' variant="caption" display="block">
                                                            {`${((two / total) * 100).toFixed(1)}%`}
                                                        </Typography>

                                                    </Paper>
                                                </Container>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        )
    }
}

function mapStateToProps({ users, questions }, props) {

    const { question_id, selectedOption } = props.match.params

    return {
        question_id,
        selectedOption,
        users: users,
        questions: questions
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Result))