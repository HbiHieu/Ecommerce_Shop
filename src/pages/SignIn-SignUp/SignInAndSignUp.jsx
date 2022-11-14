import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/SignUp/SignUp.component'

import './SignInAndSignUp.styles.scss'

export default function SignInAndSignUp() {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
  )
}
