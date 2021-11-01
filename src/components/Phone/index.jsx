import React from 'react'
import './index.scss'

export default function Phone({position}) {
  if (position === 'header') {
    return (
      <div className='Phone Phone__header'>
        <div className="Phone__content">
          <p><a href="tel:285590">28-55-90</a></p>
          <p><a href="tel:+79678385590">+7(967) 838-55-90</a></p>
        </div>
      </div>
    )
  } else if (position === 'footer') {
    return (
      <div className='Phone Phone__footer'>
        <div className="Phone__content">
          <p><a href="tel:285590">28-55-90</a></p>
          <p><a href="tel:+79678385590">+7(967) 838-55-90</a></p>
        </div>
      </div>
    )
  } else if (position === 'text') {
    return (
      <div className='Phone Phone__text'>
        <p>Звони:</p>
        <div className="Phone__content">
          <p><a href="tel:285590">28-55-90</a></p>
          <p><a href="tel:+79678385590">+7(967) 838-55-90</a></p>
        </div>
      </div>
    )
  }
}
