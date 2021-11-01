import React from 'react'
import Address from '../Address'
import Phone from '../Phone'
import Social from '../Social'
import './index.scss'

export default function Footer() {
  return (
    <div className='Footer'>
      <Phone position={'footer'} />
      <Address />
      <Social position={'footer'} />
    </div>
  )
}
