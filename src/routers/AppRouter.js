import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import Contacts from '../components/Contacts'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Achievement from "../components/Achievement"


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ Home } exact={true} />
        <Route path="/contacts" component={ Contacts } />
        <Route path="/portfolio/:id" component= {Achievement } />
        <Route path="/portfolio" component={ Portfolio }
         />

        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
