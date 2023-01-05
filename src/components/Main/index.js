import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../globals.css";
import sortItems from "../../helpers";
import { addCities, useCities } from "../../redux/sliceCities";
import { changeRegion, useRegion } from "../../redux/sliceRegion";
import { addStates, useStates } from "../../redux/sliceStates";
import api from "../../services/api";
import CitySelector from "../CitySelector";
import Content from "../Content";
import StateSelector from "../StateSelector";

export default function ComponentAddress() {
  const dispatch = useDispatch();

  const cities = useSelector(useCities);
  const states = useSelector(useStates);
  const region = useSelector(useRegion);

  const [currentState, setCurrentState] = useState(null);

  async function handleCities(value) {
    if(!value) {
      return dispatch(addCities([])) && dispatch(changeRegion([]))
    }
    setCurrentState(value);
    const { data } = await api.get(`/estados/${value}/municipios`);
    dispatch(addCities(data));
  }

  async function handleRegion(e) {
    if(!e) {
      return dispatch(changeRegion([]))
    }
    let eCitie = e
      .split(" ")
      .join("-")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const { data } = await api.get(`/municipios/${eCitie}`);
    dispatch(changeRegion(data));
  }

  const data = useMemo(() => {
    if (Array.isArray(region)) {
      const findItem = region.filter(
        (item) =>
          item.microrregiao.mesorregiao.UF.sigla.toLowerCase() ===
          currentState.toLowerCase()
      );
      return findItem[0];
    } else {
      return region;
    }
  }, [region, currentState]);

  useEffect(() => {
    async function loadStates() {
      const { data } = await api.get("/estados");
      const sortedItems = sortItems(data);
      dispatch(addStates(sortItems(sortedItems)));
    }
    loadStates();
  });

  return (
    <main>
      <div className="container">
        <StateSelector handleCities={handleCities} states={states} />

        {!!cities.length && (
          <CitySelector handleRegion={handleRegion} cities={cities} />
        )}
        <Content data={data} />
      </div>
    </main>
  );
}
