import React from "react";
import "../CSS/card.css";

const Card = ({ country }) => {
  // Eğer country prop'u boş veya tanımsız ise, hiçbir şey gösterme
  if (!country) {
    return null;
  }

  return (
    <div className="card-container">
      <li className="card">
        <img src={country.flags.svg} alt={"Bayrak " + country.name.common} />
        <div className="infos">
          <h2>{country.name.common}</h2>
          <h2>{country.capital}</h2>
          <p>Nüfus: {country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
