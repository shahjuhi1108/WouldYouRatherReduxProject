import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderTile from './LeaderTile'

class LeaderBoard extends Component {
    render() {

        const { users } = this.props

        return (
            <div>
                <h3>LeaderBoard</h3>
                {Object.keys(users).map((id) => <LeaderTile key={id} user={users[id]}/>)}
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
      users
    }
  }

export default connect(mapStateToProps)(LeaderBoard)