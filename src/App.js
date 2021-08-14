import React from 'react'
import HomePage from './components/pages/homepage/homepage.component'
import { Router, Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);


const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
    )
}


export default App