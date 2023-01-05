import React from "react";

// import { Container } from './styles';

export default function ComponentCity({handleRegiao, municipios}) {
  return (
    <div>
      <label htmlFor="municipio">Município</label>
      <select
        name="municipio"
        id="municipio"
        onChange={(e) => handleRegiao(e.target.value)}
      >
        <option></option>
        {municipios.map((municipio) => (
          <option key={municipio.id} value={municipio.nome}>
            {municipio.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
