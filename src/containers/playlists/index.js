import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from '@/components/list'
import { getPlaylists } from '@/actions'

class Playlist extends Component {
  componentDidMount () {
    const { playlists } = this.props
    if (!Array.isArray(playlists) || playlists.length === 0) {
      this.props.loadPlaylist()
    }
  }

  render () {
    const { playlistItems, playlists } = this.props
    return (
      <div className='container'>
        { playlists.map((item, index) => {
          if (Array.isArray(playlistItems[index]) && playlistItems[index].length > 0) {
            return (
              <div key={item.title}>
                <List listTitle={item.title} listItems={playlistItems[index]} />
              </div>
            )
          }
        })}
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
