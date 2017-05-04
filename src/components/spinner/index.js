import React from 'react'
import style from './style.css'

function Spinner () {
  return (
    <div className={style.backdrop}>
      <div className={style.container}>
        <div className={style.loader} />
      </div>
    </div>
  )
}

export default Spinner
