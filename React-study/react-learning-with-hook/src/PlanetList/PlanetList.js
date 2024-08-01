import React from "react";

// Import the 'PlanetItem' component
import PlanetItem from "../PlanetItem/PlanetItem";

// Import CSS module for styling
import s from "./PlanetList.module.css";

const PlanetList = () => {
  return (
    <ul className={s.list}>
      {/* Render the PlanetItem component */}
      <PlanetItem />
    </ul>
  );
};

export default PlanetList;
