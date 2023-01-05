import React, { useEffect, useMemo, useState } from "react";
import ComponentCity from "../ComponentCity";
import ComponentContent from "../ComponentContent";
import ComponentState from "../ComponentState";
import api from "../services/api";
// import { Container } from './styles';

export default function ComponentAddress() {
  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [regioes, setRegioes] = useState([]);
  const [atualEstado, setAtualEstado] = useState("");

  function sortItems(data) {
    return data.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
  }

  async function handleMunicipio(value) {
    setAtualEstado(value);
    try {
      const response = await api.get(`/estados/${value}/municipios`);
      setMunicipios(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRegiao(e) {
    let eMunicipio = e
      .split(" ")
      .join("-")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    try {
      const response = await api.get(`/municipios/${eMunicipio}`);
      setRegioes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const test = useMemo(() => {
    if (Array.isArray(regioes)) {
      const findItem = regioes.filter(
        (item) =>
          item.microrregiao.mesorregiao.UF.sigla.toLowerCase() ===
          atualEstado.toLowerCase()
      );
      return findItem[0];
    } else {
      return regioes;
    }
  }, [regioes, atualEstado]);

  useEffect(() => {
    async function loadEstados() {
      try {
        const response = await api.get("/estados");
        console.log(response.data);
        const estados = sortItems(response.data);

        setEstados(estados);
      } catch (error) {
        console.log(error);
      }
    }
    loadEstados();
  }, []);

  return (
    <>
      <ComponentState handleMunicipio={handleMunicipio} estados={estados} />
      <ComponentCity handleRegiao={handleRegiao} municipios={municipios} />
      <ComponentContent test={test} />
    </>
  );
}
