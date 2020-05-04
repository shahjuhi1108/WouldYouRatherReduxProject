import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SelectedQuestion from './SelectedQuestion'
import Result from './Result'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className='app'>
          
          {this.props.loading
            ? null
            :
            <div>
              <LoginPage />
              {/*<Nav />
              <Home />
              <NewQuestion />
              <LeaderBoard />
              <SelectedQuestion />
              <Result />*/}
            </div>
          }
        </div>
      </Router>

    )
  }
}

function mapStateToProps(state) {
  return {
    loading: (Object.keys(state.users).length === 0 || Object.keys(state.questions).length === 0)
  }
}

export default connect(mapStateToProps)(App)
