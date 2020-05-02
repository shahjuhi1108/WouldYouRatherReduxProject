import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Grid, TableCell, TableBody, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import CardHeader from '@material-ui/core/CardHeader'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import { handleUpdateVote } from '../actions/questions'





const styles = {
    root: {
        maxWidth: 500,
        margin: 8
    },

}

class SelectedQuestion extends Component {

    state = {
        chosenValue: ''
    }

    handleChange = (event) => {

        const value = event.target.value

        this.setState(() => ({
            chosenValue: value
        }))
    }

    handleClick = (event) => {
        event.preventDefault()

        const { chosenValue } = this.state

        const { dispatch, questionId } = this.props

        dispatch(handleUpdateVote(questionId, chosenValue))


    }


    render() {

        const { questionId, users, questions, classes } = this.props

        return (

            <Card className={classes.root}>
                <CardHeader
                    title={users[questions[questionId].author].name + " asks:"}
                >
                </CardHeader>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Container>
                            <Avatar alt={users[questions[questionId].author].name} src={users[questions[questionId].author].avatarURL} />
                        </Container>
                    </Grid>
                    <Grid item xs={8}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            Would You Rather...
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <RadioGroup aria-label="quiz" name="quiz" onChange={this.handleChange}>
                                                <FormControlLabel value="optionOne" control={<Radio />} label={questions[questionId].optionOne.text} />
                                                <FormControlLabel value="optionTwo" control={<Radio />} label={questions[questionId].optionTwo.text} />
                                            </RadioGroup>
                                            <Button type="submit" disabled={this.state.chosenValue === ''}
                                                variant="outlined" color="primary" className={classes.button} onClick={this.handleClick} fullWidth>
                                                Submit
                                            </Button>
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

SelectedQuestion.propTypes = {
    questionId: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
    return {
        users: state.users,
        questions: state.questions
    }
}


export default withStyles(styles)(connect(mapStateToProps)(SelectedQuestion))