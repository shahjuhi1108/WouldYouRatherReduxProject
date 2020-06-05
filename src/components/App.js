import React, { Component, Fragment } from 'react'
import { handleInitialData } from '../actions/shared'
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import SelectedQuestion from './SelectedQuestion'
import Result from './Result'
import { LoadingBar } from 'react-redux-loading'
import { Container } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router basename="/WouldYouRatherReduxProject/">
        <Fragment>
          <LoadingBar />
          <Container className='container'>
            <div>
              {this.props.loading
                ? null
                :
                <div>
                  {this.props.authedUser === ''
                  ? <Redirect to={{
                    pathname: '/login',
                    state: { from: window.location.pathname }
                  }} />
                  : 
                  <div>
                  <Nav />
                  <Route path='/' exact component={Home} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                  <Route path='/questions/:question_id' exact component={SelectedQuestion} />
                  <Route path='/questions/:question_id/:selectedOption' exact component={Result} />
                  <Route path="/404" component={NotFoundPage} />
                  </div>
                  }

                  <Route path='/login' component={LoginPage} />
                </div>
              }
            </div>
          </Container>
        </Fragment>
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


