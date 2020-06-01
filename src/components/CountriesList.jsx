import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  // console.log('Lista de Paises');
  console.log(props.countries);
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country, index) => (
          <Link
            to={`/country/${country.cca3}`}
            className="list-group-item list-group-item-action"
            key={index}
          >
            {country.flag} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}
