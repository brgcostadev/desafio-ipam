import React from "react";

// import { Container } from './styles';

export default function ComponentState({handleMunicipio, estados}) {
  return (
    <div>
      <label htmlFor="estado">Estado</label>
      <select
        name="estado"
        id="estado"
        onChange={(e) => handleMunicipio(e.target.value)}
      >
        <option></option>
        {estados.map((estado) => (
          <option key={estado.id} value={estado.sigla}>
            {estado.nome}
          </option>
        ))}
      </select>
    </div>
  );
}
