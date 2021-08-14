import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import { Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component.jsx'

import './App.css'


const App = () => {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
    )
}


export default App