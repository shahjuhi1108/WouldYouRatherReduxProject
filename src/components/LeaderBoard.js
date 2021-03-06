import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderTile from './LeaderTile'
import { Container } from '@material-ui/core'

class LeaderBoard extends Component {
    render() {

        const { users } = this.props

        const sortedUserIds = Object.keys(users)
            .sort((a, b) =>
                (Object.keys(users[b].answers).length + users[b].questions.length)
                - (Object.keys(users[a].answers).length + users[a].questions.length))

        return (
            <Container>
                <div>
                    <h3>LeaderBoard</h3>
                    {sortedUserIds.map((id) => <LeaderTile key={id} user={users[id]} />)}
                </div>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)