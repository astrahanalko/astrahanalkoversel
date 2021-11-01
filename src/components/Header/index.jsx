import React from 'react'
import './index.scss'
import bg from './../../img/beer.jpg'
import Social from '../Social'
import Phone from '../Phone'

export default function Header() {
  return (
    <div className='Header' style={{backgroundImage: `url(${bg})`}}>
      <Social position={'header'} />
      <Phone position={'header'} />
    </div>
  )
}
