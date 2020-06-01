import React from 'react';

export default function CountryDetail(props) {
  //console.log(props.countries);
  //console.log(props.match.params.id);

  let clickedCountry;
  for (let country of props.countries) {
    if (props.match.params.id === country.cca3) clickedCountry = country;
  }

  //console.log(clickedCountry);

  return (
    <div className="col-7">
      <div>
        <h1>{clickedCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{clickedCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {clickedCountry.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <p>LIST OF BORDER</p>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
