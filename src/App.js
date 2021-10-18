import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
// import Home from "./components/Home"
import countries from "./countries"
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      countries
    };
  }
  render() {
    return (
      <div className="App">

        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/list" render={() => <CountriesList data={this.state.data} />} />
          {/* exact render={() => <List contacts={contacts} />}  */}
          {/* <Route exact path="/details" component={CountryDetails} /> */}

          {/* <Route
            path="/details/:contactID"
            render={(props) => <CountriesList country={this.state.country} {...props} />}
          /> */}


          <Route
            exact
            path="/"
            render={(props) => (
              <CountriesList countries={this.state.countries} />
            )}
          />

          <Route
            exact
            path="/details/:id"
            render={(props) => (
              <CountryDetails {...props} countries={this.state.countries} />
            )}
          />


        </Switch>
        <CountryDetails />

        {/* <Home />
        <CountriesList />
        <CountryDetails /> */}

      </div>

    );
  }
}

export default App;
