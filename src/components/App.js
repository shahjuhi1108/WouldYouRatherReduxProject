import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import SelectedQuestion from './SelectedQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='container'>
          {this.props.loading
            ? null
            :
            <div>

              <Route path='/login' exact component={LoginPage} />
              <Nav />
              <Route path='/' exact component={Home} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/questions/:question_id' component={SelectedQuestion} />
            </div>
          }
        </div>
      </Router>

    )
  }
}

function mapStateToProps(state) {
  return {
    loading: (Object.keys(state.users).length === 0 || Object.keys(state.questions).length === 0),
    authedUser: state.authedUser,
    users: state.users
  }
}

export default connect(mapStateToProps)(App)
