import React from 'react'
import { Switch, Route } from 'react-router-dom'
import asyncComponent from './AsyncComponent'

const App = asyncComponent(() =>
import('../components/App').then(module => module.default)
)

const MovieDetails = asyncComponent(() =>
import('../components/MovieDetails').then(module => module.default)
)

const Login = asyncComponent(() =>
import('../components/Login').then(module => module.default)
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path="/:id" component={MovieDetails} />
      
    </Switch>
  </main>
)

export default Main
