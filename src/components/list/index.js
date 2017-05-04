import React, { PropTypes } from 'react'
import Item from '../item'
import style from './style.css'

const List = props => {
  const { listItems, listTitle } = props
  return (
    <div className={style.container}>
      <h1 className={style.title}>{listTitle}</h1>
      <div className={style.list}>
        { listItems.map((item) => {
          item = item.snippet
          if (item.title !== 'Deleted video') {
            return (<Item thumbnails={item.thumbnails} title={item.title} description={item.description} key={item.resourceId.videoId} videoId={item.resourceId.videoId} />)
          }
        }) }
      </div>
    </div>
  )
}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object),
  listTitle: PropTypes.string
}

export default List
