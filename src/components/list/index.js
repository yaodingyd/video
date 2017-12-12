import React, { PropTypes, Component } from 'react'
import Item from '../item'
import style from './style.css'
import { CSSTransition } from 'react-transition-group'

class List extends Component {
  constructor () {
    super()
    this.state = {
      min: 0,
      max: 4
    }
  }

  getPrev = () => {
    this.setState((prevState) => ({
      min: prevState.min === 0 ? 0 : prevState.min - 1,
      max: prevState.min === 0 ? prevState.max : prevState.max - 1
    }))
  }

  getNext = () => {
    const max = this.props.listItems.length - 1
    this.setState((prevState) => ({
      min: prevState.max >= max ? prevState.min : prevState.min + 1,
      max: prevState.max >= max ? max : prevState.max + 1
    }))
  }

  componentWillMount = () => {
    const max = this.props.listItems.length - 1
    this.setState((prevState) => ({
      max: prevState.max >= max ? max : 4
    }))
  }

  render () {
    const listmax = this.props.listItems.length - 1
    const { listItems, listTitle } = this.props
    const { min, max } = this.state
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
        <button type='button' onClick={this.getPrev} className={min === 0 ? `${style.disable} ${style.prev}` : style.prev}>&lt;</button>
        <button type='button' onClick={this.getNext} className={max === listmax ? `${style.disable} ${style.next}` : style.next}>&gt;</button>
        <div className={style.list}>
          { listItems.map((item, index) => {
            let transitionIn = index >= min && index <= max
            console.log(transitionIn)
            item = item.snippet
            if (item.thumbnails !== undefined) {
              return (
                <CSSTransition timeout={{enter: 500, exit: 0}} in={transitionIn} key={item.resourceId.videoId} classNames={style} mountOnEnter unmountOnExit>
                  <Item thumbnails={item.thumbnails} title={item.title} description={item.description} videoId={item.resourceId.videoId} />
                </CSSTransition>)
            }
          }) }
        </div>
      </div>
    )
  }
}

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object),
  listTitle: PropTypes.string
}

export default List
