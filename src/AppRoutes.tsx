import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}