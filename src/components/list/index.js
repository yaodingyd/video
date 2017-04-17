import React, { PropTypes } from 'react'
import Item from '../item'

const List = props => {
  const { listItems } = props
  return (
    <div>
      { listItems.map((item) => (
        <Item thumbnail={item.thumbnail} title={item.title} description={item.description} />
      )) }
    </div>
  )
}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object)
}

export default List
