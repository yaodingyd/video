import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { playVideo } from '@/actions'
import style from './style.css'

class Item extends Component {
  handleClick = () => {
    this.props.playVideo(this.props.videoId)
  }

  render () {
    const {thumbnails, title, description} = this.props
    return (
      <div onClick={this.handleClick} className={style.item} style={{backgroundImage: `url(${thumbnails.high.url})`}}>
        <div className={style.overlay}>
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
    )
  }
}

Item.propTypes = {
  thumbnails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  playVideo: (id) => {
    dispatch(playVideo(id))
  }
})

export default connect(null, mapDispatchToProps)(Item)
