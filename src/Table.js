import React from "react";
import "./Table.css";

export default function Table({ data }) {
  return (
    <div className="table">
      <th className="heading1">All Countries</th>
      <th className="heading2">Cases</th>
      {data
        .sort((a, b) => (a.cases > b.cases ? -1 : 1))
        .map((country) => (
          <tr className="row">
            <td className="data">{country.country}</td>
            <td className="data">{country.cases}</td>
          </tr>
        ))}
    </div>
  );
}
