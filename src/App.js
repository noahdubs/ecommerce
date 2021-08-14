import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component.jsx'

import './App.css'

import { auth } from './firebase/firebase.utils'


const App = () => {

  const [currentUser, setUser] = useState(null)

  let unsubscribeFromAuth = null

  useEffect(() => {
      unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setUser({currentUser: user})
      console.log(user)
    })
  }, [])

  useEffect(() => {
    unsubscribeFromAuth() 
    return () => {
      console.log("unsubscribed")
    }
  }, [])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
    )
}


export default App