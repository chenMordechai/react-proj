// import React from 'react';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ContactPage from './pages/ContactPage/ContactPage'
import StatisticPage from './pages/StatisticPage/StatisticPage'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEdit from './pages/ContactEdit/ContactEdit'
import Header from './components/Header/Header'




class App extends Component {
  render() {
  
    return (
<Router>
  
  <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/statistic" component={StatisticPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/contact/edit/:id?" component={ContactEdit} />
            <Route exact path="/contact/:id?" component={ContactDetailsPage} />
            {/* <Route path="/contact/edit/:id?" render={(props) => (
              <ContactEdit contactId={props.match.params.id} history={props.match.history} /> )} /> */}
            {/* <Route path="/contact/:id" render={({match}) => (
              <ContactDetailsPage contactId={match.params.id} />)} /> */}
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        
          
</Router>
        )
  }
}

export default App;
