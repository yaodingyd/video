import React, { PropTypes } from 'react'
import YouTube from 'react-youtube'
import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'
import style from './style.css'

const Player = ({ params }) => {
  const opts = {
    height: '90%',
    width: '90%',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <div className={style.container}>
      <Link to='/playlists'>
        <Glyphicon glyph='arrow-left' className={style.back} />
      </Link>
      <YouTube opts={opts} videoId={params.videoId} className={style.player} />
    </div>
  )
}

Player.propTypes = {
  videoId: PropTypes.string
}

export default Player
