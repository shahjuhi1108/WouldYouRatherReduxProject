import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { TextField, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'




import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        maxWidth: 450,
        minWidth: 300
    },
    media: {
        height: 140,
    },
    center: {
        margin: 5,
        padding: 10
    },
    textBox: {
        maxWidth: 400,
        minWidth: 250
    }
}

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }

    handleChange = (event) => {

        const text = event.target.value

        if (event.target.id === "first-option") {
            this.setState(() => ({
                optionOneText: text
            }))
        }

        else if (event.target.id === "second-option") {
            this.setState(() => ({
                optionTwoText: text
            }))
        }
    }

    handleClick = (event) => {
        event.preventDefault()

        const { dispatch } = this.props

        dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true
        }))

    }


    render() {
        const { classes } = this.props

        if (this.state.toHome) {
            return < Redirect to='/' />
        }

        return (
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardHeader
                                    title="Create New Question"
                                >
                                </CardHeader>
                                <Container className={classes.center}>
                                    <Typography>
                                        Would You Rather...
                                    </Typography>
                                    <CardContent>
                                        <TextField
                                            id="first-option"
                                            label="Option One" variant="filled"
                                            placeholder="Option One"
                                            value={this.state.optionOneText}
                                            onChange={this.handleChange}
                                            className={classes.textBox}
                                        />
                                        <Typography gutterBottom >
                                            OR
                                        </Typography>
                                        <TextField
                                            id="second-option"
                                            label="Option Two" variant="filled"
                                            placeholder="Option Two"
                                            value={this.state.optionTwoText}
                                            onChange={this.handleChange}
                                            className={classes.textBox}
                                        />
                                    </CardContent>

                                    <Button
                                        onClick={this.handleClick}
                                        type='submit'
                                        disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
                                        variant="outlined" color="primary"
                                        fullWidth
                                    >
                                        Submit
                                </Button>
                                </Container>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        )
    }
}

export default connect()(withStyles(styles)(NewQuestion))