import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Descriptions from './pages/Descriptions'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/description" component={Descriptions}></Route>
        {/* <Route
          path="/description/"
          render={props => <Descriptions {...props} />}
        ></Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
