import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component.jsx'

import './App.css'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'


const App = props => {
  const {setCurrentUser} = props

  let unsubscribeFromAuth = null

  useEffect(() => {
      unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth) 
        })
  }, [])

  useEffect(() => {
    return () => {
      unsubscribeFromAuth() 
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)