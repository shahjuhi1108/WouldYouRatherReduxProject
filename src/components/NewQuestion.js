import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { TextField, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'
import { handleAddQuestion } from '../actions/addQuestion'



import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
}

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleChange = (event) => {

        const text = event.target.value

        if(event.target.id === "first-option") {
            this.setState(() => ({
                optionOneText: text
            }))
        }

        else if(event.target.id === "second-option") {
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
            optionTwoText: ''
        }))

    }


    render() {
        const { classes } = this.props

        return (
            <div>
 
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Tab label="Active" />
                </Grid>

                <Grid item xs={4}>
                <Tab label="Active" />
                </Grid>
                <Grid item xs={4}>
                <Tab label="Active" />
                </Grid>
                
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardHeader
                        title="Create New Question"
                    >
                    </CardHeader>

                        <CardContent>
                            <TextField                      
                                id="first-option" 
                                label="Option One" variant="filled" 
                                placeholder="Option One"
                                value={this.state.optionOneText}
                                onChange={this.handleChange}
                            />
                            <Typography variant="h6" gutterBottom >
                            OR
                            </Typography>
                            <TextField 
                                id="second-option" 
                                label="Option Two" variant="filled" 
                                placeholder="Option Two"
                                value={this.state.optionTwoText}
                                onChange={this.handleChange}                         
                            />
                        </CardContent>

                        <button
                        onClick={this.handleClick}
                        type='submit'
                        disabled={this.state.optionOneText === '' || this.state.optionTwoText === ''}
                        >
                            Submit
                        </button>

                </Card>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default connect()(withStyles(styles)(NewQuestion))