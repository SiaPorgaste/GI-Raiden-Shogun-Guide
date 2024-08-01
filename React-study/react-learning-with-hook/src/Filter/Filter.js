// Import the 'Context' object from "../context"
import React, { useContext } from "react";
import Context from "../context/context";

// Import CSS module for styling
import s from "./Filter.module.css";

const Filter = () => {
  // Access the handleInputChange and inputValue functions from the Context
  const { handleInputChange, inputValue } = useContext(Context);

  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="planetName">
        Filter planets
      </label>
      <input
        className={s.input}
        id="planetName"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Planet-X"
      />
    </form>
  );
};

export default Filter;
