import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {

  const [info, setInfo] = useState({email: '', password: ''})

  const handleSubmit = async event => {
    event.preventDefault()

    const { email, password } = info 

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setInfo({email: '', password: ''})
    } catch (error) {
      console.log(error)
    }

    setInfo({email: '', password: ''})
  }

  const handleChange = event => {
    const { value, name } = event.target

    setInfo({...info, [name]: value })
  }
  
  return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={info.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={info.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
        </form>
      </div>
    )
}

export default SignIn
