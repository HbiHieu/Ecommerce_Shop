import React from 'react'

import "./Button.styles.scss"

export default function Button({ children , isGoogleButton , ...otherProps}) {
  return (
    <button className={ isGoogleButton ? `google-button` :`custom-button`} {...otherProps} >
       {children}
    </button>
  )
}
