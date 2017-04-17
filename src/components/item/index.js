import React, { PropTypes } from 'react'
import style from './style.css'

const Item = props => {
  const {thumbnail, title, description} = props
  return (
    <div className={style.item} style={{backgroundImage: `url(${thumbnail})`}}>
      <div className={style.overlay}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  )
}

Item.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Item
