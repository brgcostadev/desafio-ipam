import React from "react";

// import { Container } from './styles';

export default function ComponentContent({ test }) {
  return (
    <>
      {!!test && (
        <div>
          <h1>Microregião: {test.nome}</h1>
          <h1>Mesorregião: {test.microrregiao.mesorregiao.nome}</h1>
          <h1>UF: {test.microrregiao.mesorregiao.UF.nome}</h1>
          <h1>Região: {test.microrregiao.mesorregiao.UF.regiao.nome}</h1>
        </div>
      )}
    </>
  );
}
