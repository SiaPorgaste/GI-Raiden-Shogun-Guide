// Define the 'fetchData' function.
export default function fetchData() {
  // Define the URL to the cat facts API endpoint.
  const URL = "https://catfact.ninja/facts";

  // Use the fetch API to make an HTTP GET request to the specified URL.
  return fetch(URL).then((resp) => {
    // Check if the response status is OK (HTTP status code 200).
    if (resp.ok) {
      // If the response is OK, parse the response body as JSON and return it.
      return resp.json();
    }

    // If the response status is not OK (e.g., due to a network error or server error),
    // reject the promise with an error message.
    return Promise.reject("An error occurred.");
  });
}
