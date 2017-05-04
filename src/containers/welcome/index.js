import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLoginInit, getLogin } from '@/actions'
import Spinner from '@/components/spinner'
import style from './style.css'

class Welcome extends Component {
  componentDidMount () {
    this.props.loginInit()
  }

  render () {
    const { isFetching } = this.props
    return (
      <div className={style.intro}>
        { isFetching && (
          <Spinner />
        )}
        <h1>Watch your YouTube playlists,</h1>
        <h2>in the Netflix way</h2>
        <button type='button' className={style.login} onClick={this.props.handleLogin}>Log In</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
    dispatch(getLogin())
  },
  loginInit: () => {
    dispatch(getLoginInit())
  }
})

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
