import React from 'react'
import "./menuItem.styles.scss"

export default function MenuItem({ title , imageUrl , size }) {
  return (
    <div 
    className={`${size} menu-item`}
    // style={{
    //   backgroundImage : `url(${imageUrl})` ,
    // }}
    >
        <img className='img' src={`${imageUrl}`} alt="" />
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
  )
}
