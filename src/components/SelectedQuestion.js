import React, { Component } from 'react'
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
import { Redirect } from 'react-router-dom'


const styles = {
    root: {
        maxWidth: 500,
        margin: 8
    },
}

class SelectedQuestion extends Component {

    state = {
        chosenValue: '',
        redirect: false
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

        const { dispatch, question_id } = this.props

        dispatch(handleUpdateVote(question_id, chosenValue))

        this.setState(() => ({
            redirect: true,
        }))

    }


    render() {

        const { question_id, users, questions, classes } = this.props

        if(this.state.redirect) {
            return <Redirect to={`/questions/${question_id}/${this.state.chosenValue}`} />
        }


        return (

            <Card className={classes.root}>
                <CardHeader
                    title={users[questions[question_id].author].name + " asks:"}
                >
                </CardHeader>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Container>
                            <Avatar alt={users[questions[question_id].author].name} src={users[questions[question_id].author].avatarURL} />
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
                                                <FormControlLabel value="optionOne" control={<Radio />} label={questions[question_id].optionOne.text} />
                                                <FormControlLabel value="optionTwo" control={<Radio />} label={questions[question_id].optionTwo.text} />
                                            </RadioGroup>
                                                <Button onClick={this.handleClick} type="submit" disabled={this.state.chosenValue === ''}
                                                    variant="outlined" color="primary" className={classes.button} fullWidth>
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

function mapStateToProps({ users, questions }, props) {

    const { question_id } = props.match.params

    return {
        question_id,
        users: users,
        questions: questions
    }
}


export default withStyles(styles)(connect(mapStateToProps)(SelectedQuestion))