// Import the necessary hooks from the 'react' library.
// Change the code below
import React, { useMemo, useState } from "react";

// Import CSS styles from the 'CarList.module.css' module.
import s from "./CarList.module.css";

// Define the 'CarList' functional component that takes a 'cars' prop.
const CarList = ({ cars }) => {
  // Initialize state variable 'searchInput' using the 'useState' hook.
  // Change the code below
  const [searchInput, setSearchInput] = useState("");

  // Use the 'useMemo' hook to memoize the filtered cars array.
  // Change the code below
  const filteredCars = useMemo(() => {
    // If the search input is empty, return all cars.
    if (searchInput.trim() === "") {
      return cars;
    } else {
      // Filter cars based on the search input (case-insensitive).
      return cars.filter((car) =>
        car.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    // Change the code below
  }, [cars, searchInput]); // Memoize the filtered cars array based on changes in 'cars' and 'searchInput'.

  // Render the markup.
  return (
    <div className={s.container}>
      {/* Render an input field for searching by car name. */}
      <input
        className={s.input}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by name"
      />
      <ul className={s.list}>
        {/* Render each car in the filtered cars array. */}
        {filteredCars.map(({ id, image, name }) => (
          <li key={id} className={s.item}>
            <img srcSet={image} alt={name} width={380} className={s.image} />
            <p className={s.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the 'CarList' component for use in other parts of the application.
export default CarList;
