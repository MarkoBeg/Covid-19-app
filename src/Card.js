import React, { useState } from "react";
import "./Card.css";

export default function Card({
  name,
  continent,
  active,
  cases,
  recovered,
  critical,
  todayCases,
  deaths,
  todayDeaths,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={isActive ? "nameRed" : "card"}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="card-section">
        <div className="box1">
          <h2>{name}</h2>
          <span>{continent}</span>
        </div>
        <div className="box2">
          <p>{active}</p>
          <span>{cases}</span>
        </div>
        <div className="box3">
          <p className="recovered">{recovered} </p>
          <span>{critical} </span>
          <p>{todayCases} </p>
        </div>
        <div className="box4">
          <p>{deaths}</p>
          <p>{todayDeaths}</p>
        </div>
      </div>
    </div>
  );
}
