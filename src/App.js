import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import countries from './countries.json';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

const countriesArray = [...countries];

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <CountriesList countries={countriesArray} />

          <Switch>
            <Route
              path="/country/:id"
              exact
              render={(props) => (
                <CountryDetail countries={countriesArray} {...props} />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
