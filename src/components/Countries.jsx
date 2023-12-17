import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "../CSS/countries.css";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("Africa");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setData(response.data);
    });
  }, []); // Bağımlılık dizisi boş, yani bu efekt sadece bileşen mount edildiğinde çalışır

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          className="slider"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="ContinentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Aramayı İptal Et
        </button>
      )}

      <ul>
        {data
          .filter((country) => country.region.includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country) => (
            <Card key={country.name.common} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
