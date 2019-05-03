import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import jsonCountries from './countries.json';

export default function CountryDetail(props) {
  function getCountryFromCaa3(cca3) {
    return jsonCountries.find(c => c.cca3 === cca3)
  }

  // There is a `props.match.params.cca3` because the component was defined with <Route path="/:cca3" component={CountryDetail} />
  let cca3 = props.match.params.cca3
  // `.find` return the 1st country that match the condition
  let country = getCountryFromCaa3(cca3)

  // If we didn't find any country
  if (!country) {
    // // Solution 1: display an error message
    // return <div>Sorry, there is no country</div>

    // Solution 2: Redirect the user to the home
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capitals</td>
            <td>{country.capital.join(", ")}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country.area} km<sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(cca3 => <li key={cca3}>
                  <Link to={"/"+cca3}>
                    {getCountryFromCaa3(cca3).name.common}
                  </Link>
                </li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
