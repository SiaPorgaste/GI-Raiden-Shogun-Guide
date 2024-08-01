// Import necessary hooks from the 'react' library.
import { useEffect, useState } from "react";

// Import a function named 'fetchData' from a service file named 'api'.
import fetchData from "../service/api";

// Import CSS styles from the 'Articles.module.css' module.
import s from "./Articles.module.css";

// Define the 'Articles' functional component.
const Articles = () => {
  // Initialize a state variable 'articles' as an empty array.
  const [articles, setArticles] = useState([]);

  // Use the 'useEffect' hook to fetch data before the component renders.
  useEffect(() => {
    // Call the 'fetchData' function, which likely makes an API request.
    fetchData()
      .then((resp) => {
        // Update the 'articles' state with the fetched data.
        setArticles(resp.jokes);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch.
        console.error(error);
      });
  }, []);

  // Render the markup.
  return (
    <ul className={s.articleList}>
      {/* Map through the 'articles' array and render each article as a list item. */}
      {articles.map(({ id, category, joke }) => (
        <li key={id} className={s.articleItem}>
          <div className={s.card}>
            <p>
              <b>Category: </b>
              {category}
            </p>
            <p>
              <b>Joke: </b>
              {joke}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

// Export the 'Articles' component for use in other parts of the application.
export default Articles;
