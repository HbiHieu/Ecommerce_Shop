import React from 'react'
import { Link } from 'react-router-dom'
import "./menuItem.styles.scss"

export default function MenuItem({ title , imageUrl , size , linkUrl}) {
  return (
    <div
    className={`${size} menu-item`}
    >
        <img className='img' src={`${imageUrl}`} alt="" />
        <Link 
        className='content'
        to={`${linkUrl}`}
        >
          <div className='title'>{title}</div>
          <span className='subtitle'>Shop Now</span>
        </Link>
      </div>
  )
}
