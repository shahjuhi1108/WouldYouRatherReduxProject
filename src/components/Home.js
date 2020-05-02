import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

    answered = []

    unasnwered = []

    componentDidMount() {

        const { authedUser, questions } = this.props

        
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser,
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Home)