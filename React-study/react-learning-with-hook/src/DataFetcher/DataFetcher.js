// Import the necessary hooks from the 'react' library.
import { useEffect, useState } from "react";

// Import a function named 'fetchData' from a service file named 'api'.
import fetchData from "../service/api";

// Import CSS styles from the 'DataFetcher.module.css' module.
import s from "./DataFetcher.module.css";

// Define the 'DataFetcher' functional component.
const DataFetcher = () => {
  // Initialize state variables 'data' and 'error' using the 'useState' hook.
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Use the 'useEffect' hook to fetch data when the component is mounted.
  useEffect(() => {
    // Call the 'fetchData' function, which likely makes an API request.
    fetchData()
      .then((responseData) => {
        // Update the 'data' state with the fetched data.
        setData(responseData.data);
      })
      .catch((err) => {
        // Handle any errors that occur during the fetch and update the 'error' state.
        setError(err.message);
      });
  }, []);

  // Render the markup based on the 'data' and 'error' states.
  return (
    <div className={s.dataFetcher}>
      {error ? (
        // If an error occurred, display an error message.
        <p className={s.error}>Error: {error}</p>
      ) : data.length === 0 ? (
        // If data is still loading, display a loading message.
        <p className={s.loading}>Loading data...</p>
      ) : (
        // If data is available, render a list of items.
        <ul className={s.list}>
          {data.map(({ length, fact }) => (
            <li key={length} className={s.item}>
              {fact}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Export the 'DataFetcher' component for use in other parts of the application.
export default DataFetcher;
