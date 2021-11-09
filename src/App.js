import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Table from "./Table";

export default function App() {
  const [allcountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("World");
  const [table, setTable] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();
      setCountry(data);
    };
    getAll();
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await response.json();
      const countries = data.map((country) => ({
        name: country.country,
      }));
      setAllCountries(countries);
      setTable(data);
    };
    console.log(allcountries);

    getCountries();
  }, []);

  const getSelectedCountry = async (e) => {
    const selectedCountry = e.target.value;
    const url =
      selectedCountry === "World"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

    const response = await fetch(url);
    const data = await response.json();

    setSelectedCountry(selectedCountry);
    setCountry(data);
  };

  console.log(country);

  return (
    <div className="app">
      <h1>Covid 19 App</h1>
      <form>
        <select
          className="select"
          value={selectedCountry}
          onChange={getSelectedCountry}
        >
          <option value="World">World</option>
          {allcountries.map((country) => (
            <option key={country.id} className="option">
              {country.name}
            </option>
          ))}
        </select>
      </form>
      <div className="cards">
        <Card
          name={!country.country ? "World" : country.country}
          continent={country.continent}
        ></Card>
        <Card
          active={`${country.active} Active`}
          cases={`${country.cases} Cases`}
        ></Card>
        <Card
          recovered={`${country.recovered} Recovered`}
          critical={`${country.critical} Critical`}
          todayCases={`${country.todayCases} todayCases`}
        ></Card>
        <Card
          deaths={`${country.deaths} Deaths`}
          todayDeaths={`${country.todayDeaths} todayDeaths`}
        ></Card>
      </div>
      <div className="table-section">
        <Table data={table}></Table>
      </div>
    </div>
  );
}
