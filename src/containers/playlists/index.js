import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '@/components/list'
import Player from '@/components/player'
import { getPlaylists } from '@/actions'

class Playlist extends Component {
  componentDidMount () {
    this.props.loadPlaylist()
  }

  render () {
    const { playlistItems, playlists, videoId } = this.props
    return (
      <div>
        <h1>playlists</h1>
        { playlists.map((item, index) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <List listItems={playlistItems[index]} />
          </div>
        ))}
        <Player videoId={videoId} />
      </div>
    )
  }
}

Playlist.propTypes = {
  loadPlaylist: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  loadPlaylist: () => {
    dispatch(getPlaylists())
  }
})

const mapStateToProps = (state) => ({
  playlistItems: state.video.playlistItems,
  playlists: state.video.playlists,
  videoId: state.video.videoId
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
