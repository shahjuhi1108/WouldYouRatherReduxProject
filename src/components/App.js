import React, { Component } from 'react'
import { handleLoginPageData } from '../actions/loginPageData'
//import LoginPage from './LoginPage'
import { connect } from 'react-redux'
//import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleLoginPageData())
  }
  render() {
    return (
      <div className='app'>
        {/*<LoginPage />*/}
        {/*<NewQuestion />*/}
        <LeaderBoard />
      </div>
    )
  }
}

export default connect()(App)
