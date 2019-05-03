import React, { Component } from 'react';
import jsonCountries from './countries.json';
import { NavLink, Route, Link } from 'react-router-dom'
import CountryDetail from './CountryDetail'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              <div className="list-group">
                {jsonCountries.map(country => (
                  <NavLink key={country.cca3} to={"/"+country.cca3} className="list-group-item list-group-item-action" >
                    {country.flag} {country.name.common}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="col-7">
              <Route path="/:cca3" component={CountryDetail}  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
