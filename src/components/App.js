import React, { Component } from 'react'
import { handleLoginPageData } from '../actions/loginPageData'
//import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleLoginPageData())
  }
  render() {
    return (
      <div className='app'>
        {/*<LoginPage />*/}
        <NewQuestion />
      </div>
    )
  }
}

export default connect()(App)
