import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CovidStatus from 'covid-status-module/ui/CovidStatus'
import About from 'pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={CovidStatus} />
      <Route exact path='/about' component={About} />
    </Switch>
  )
}

export default Routes
