import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import QuestionTile from './QuestionTile'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'


function TabPanel(props) {
    const { value, index, questions } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box p={2}>
                    {questions.map((question) => <QuestionTile key={question.id} question={question}/>)}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    questions: PropTypes.array.isRequired
};


const styles = {
    root: {
        maxWidth: 450,
        padding: 5
    },
}

class Home extends Component {

    state = {
        index: 0
    }

    componentDidMount() {

        const { authedUser, questions } = this.props      

    }

    handleChange = (event, newIndex) => {
        event.preventDefault()

        const { index } = this.state

        this.setState(() => ({
            index: newIndex 
        }))

    }


    render() {

        const { classes } = this.props

        return (
            <div>
                <h1>Home Page</h1>
                <div>
                    <Paper className={classes.root} elevation={1} variant="outlined">
                        <AppBar position="static">
                            <Tabs value={this.state.index} onChange={this.handleChange}>
                                <Tab label="Unanswered Questions" />
                                <Tab label="Answered Questions" />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.index} index={0} questions={this.props.unanswered} />
                        <TabPanel value={this.state.index} index={1} questions={this.props.answered} />
                    </Paper>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const answered = []
    const unanswered = []

    const questions = state.questions
    const authedUser = "johndoe"

    Object.keys(questions).forEach((id) => {
        questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser)
            ? answered.push(questions[id])
            : unanswered.push(questions[id])
    })


    return {
        authedUser,
        answered,
        unanswered
    }
}

export default withStyles(styles)(connect(mapStateToProps)(Home))