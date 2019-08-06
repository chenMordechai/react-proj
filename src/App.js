// import React from 'react';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import Header from './components/Header/Header'
import signupPage from './pages/SignupPage/SignupPage'




function App() {
 
    return (
<Router>
  <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/statistic" component={StatisticPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/contact/edit/:id?" component={ContactEdit} />
            <Route exact path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/signup" component={signupPage} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
</Router>
        )
  }


export default App;
