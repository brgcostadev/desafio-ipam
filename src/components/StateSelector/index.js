import React from "react";

export default function ComponentState({ handleCities, states }) {
  return (
    <div className="customize-selector">
      <label className="customize-label" htmlFor="estado">
        Estado
      </label>
      <select
        className="customize-select"
        name="estado"
        id="estado"
        onChange={(e) => handleCities(e.target.value)}
      >
        <option></option>
        {states.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
