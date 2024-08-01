import React, { useEffect, useState } from "react";

// Import the 'Context' object from "../context"
import Context from "../context/context";

// Import planet data from "../data"
import data from "../data/planet";

// Import the 'Filter' and 'PlanetList' components
import Filter from "../Filter/Filter";
import PlanetList from "../PlanetList/PlanetList";

// Import CSS module for styling
import s from "./App.module.css";

// Import global styles
import "../index.css";

const App = () => {
  // Initialize state variables
  const [planets, setPlanets] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Use useEffect to filter the data based on the inputValue
  useEffect(() => {
    if (inputValue === "") {
      // If the inputValue is empty, set the planets to the original data
      setPlanets(data);
    } else {
      // If the inputValue has a value, filter the data based on the planet name
      const filteredPlanets = data.filter((planet) =>
        planet.name.toLowerCase().includes(inputValue)
      );
      setPlanets(filteredPlanets);
    }
  }, [inputValue]); // Trigger the effect whenever the inputValue changes

  // Handle input change event
  const handleInputChange = (event) => {
    // Extract the value from the event's target (input field)
    const inputValue = event.target.value;

    // Convert the value to lowercase and remove leading/trailing whitespace
    const formattedValue = inputValue.toLowerCase().trim();

    // Update the state with the formatted value
    setInputValue(formattedValue);
  };

  // Create the appData object to be passed to the Context.Provider
  const appData = { planets, inputValue, handleInputChange };

  return (
    <Context.Provider value={appData}>
      <div className={s.appContainer}>
        {/* Render the Filter component */}
        <Filter />
        {/* Render the PlanetList component */}
        <PlanetList />
      </div>
    </Context.Provider>
  );
};

export default App;
