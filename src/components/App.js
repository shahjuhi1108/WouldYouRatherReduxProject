import React, { Component } from 'react'
import { handleInitialData } from '../actions/loginPageData'
import LoginPage from './LoginPage'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import SelectedQuestion from './SelectedQuestion'
import Result from './Result'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className='app'>
        <LoginPage />
        <NewQuestion />
        <LeaderBoard />
        {this.props.loading 
              ? null
              : 
                <div>
                  <SelectedQuestion questionId="6ni6ok3ym7mf1p33lnez"/>
                </div>
        }
        <Result questionId="6ni6ok3ym7mf1p33lnez"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    loading: (Object.keys(state.users).length === 0 || Object.keys(state.questions).length === 0)
  }
}

export default connect(mapStateToProps)(App)
