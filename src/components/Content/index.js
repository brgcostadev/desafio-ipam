import React from "react";

export default function ComponentContent({ data }) {
  return (
    <>
      {!!data && (
        <div className="container-content">
          <span className="customize-title">Microregião:</span>
          <span className="customize-content">{data.nome}</span>
          <span className="customize-title">Mesorregião:</span>
          <span className="customize-content">{data.microrregiao.mesorregiao.nome}</span>
          <span className="customize-title">UF:</span>
          <span className="customize-content">{data.microrregiao.mesorregiao.UF.nome}</span>
          <span className="customize-title">Região:</span>
          <span className="customize-content">{data.microrregiao.mesorregiao.UF.regiao.nome}</span>
        </div>
      )}
    </>
  );
}
