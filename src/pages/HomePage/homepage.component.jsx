import React from 'react'
import Directory from '../../components/directory/directory.component'
import '../HomePage/homepage.styles.scss'

export default function Homepage() {
  return (
    <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory/>
    </div>
  )
}
