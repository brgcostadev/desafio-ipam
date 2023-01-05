import React from "react";

export default function ComponentCity({ handleRegion, cities }) {
  return (
    <div className="customize-selector">
      <label className="customize-label" htmlFor="municipio">
        Município
      </label>
      <select
        className="customize-select"
        name="municipio"
        id="municipio"
        onChange={(e) => handleRegion(e.target.value)}
      >
        <option></option>
        {cities?.map((municipio) => (
          <option key={municipio.id} value={municipio.nome}>
            {municipio.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
