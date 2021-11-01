import React from 'react'
import './index.scss'

export default function MainWrapper({children}) {
  return (
    <div className='MainWrapper'>
      {children}
    </div>
  )
}
