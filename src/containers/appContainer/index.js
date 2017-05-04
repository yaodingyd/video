import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '@/components/header'
import { getLogout } from '@/actions'

class AppContainer extends Component {
  render () {
    const { children, channelTitle, handleLogout } = this.props
    return (
      <div>
        <Header channelTitle={channelTitle} handleLogout={handleLogout} />
        {children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(getLogout())
  }
})

const mapStateToProps = (state) => ({
  channelTitle: state.video.channelTitle
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
