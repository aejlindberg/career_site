import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import SingleJobPage from "./SingleJobPage"
import JobListing from "./JobListing"
import LandingPage from "./LandingPage"
import EmployeePage from "./EmployeePage"
import Footer from "./Footer"
import Header from "./HeaderComponent"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/jobs" component={JobListing} />
            <Route exact path="/jobs/:id" component={SingleJobPage} />
            <Route exact path="/employees" component={EmployeePage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App
