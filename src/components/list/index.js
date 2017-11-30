import React, { PropTypes } from 'react'
import Item from '../item'
import style from './style.css'

const List = props => {
  const { listItems, listTitle } = props
  let listNum = listItems.reduce((accum, item) => {
    accum = item.snippet.thumbnails !== undefined ? accum + 1 : accum
    return accum
  }, 0)
  if (!listNum) {
    return null
  }
  return (
    <div className={style.container}>
      <h1 className={style.title}>{listTitle}</h1>
      <div className={style.list}>
        { listItems.map((item) => {
          item = item.snippet
          if (item.thumbnails !== undefined) {
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
