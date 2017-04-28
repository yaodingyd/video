import React, { PropTypes } from 'react'
import YouTube from 'react-youtube'

const Player = ({ videoId }) => {
  return (
    <div>
      <YouTube videoId={videoId} />
    </div>
  )
}

Player.propTypes = {
  videoId: PropTypes.string.isRequired
}

export default Player
