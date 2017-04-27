import React, { PropTypes } from 'react'
import style from './style.css'

const Item = props => {
  const {thumbnails, title, description} = props
  return (
    <div className={style.item} style={{backgroundImage: `url(${thumbnails.high.url})`}}>
      <div className={style.overlay}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  )
}

Item.propTypes = {
  thumbnails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Item
