import React from 'react'
import { Link } from 'react-router-dom'
import "./NoMatch.styles.scss"

export default function NoMatch() {
  return (
    <div className="page404">
      <h1>Ooops...</h1>
      <h2>That page cannot be found 😵</h2>
      <p>
        Go back to the{' '}
        <Link to={"/"}>
          <a className="font-bold text-green-600">Homepage</a>
        </Link>
      </p>
    </div>
  )
}
