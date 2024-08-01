import React, { useState } from "react";
// Change the lines below:
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions/goalAction";

const Form = () => {
  // Change the line below:
  const dispatch = useDispatch();
  const [goal, setGoal] = useState(""); // Define a state variable 'goal' using useState hook, initially empty string

  // Event handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Dispatch an action using the 'addGoal' action creator
    dispatch(
      // Change the line below:
      addGoal({
        id: Date.now(), // Generate a unique id using the current timestamp
        text: goal, // Pass the value of 'goal' input field as the text of the goal
      })
    );
    resetForm(); // Reset the form after submission
  };

  // Event handler for input field change
  const handleChange = (e) => {
    const { value } = e.currentTarget; // Get the value of the input field from the event object
    setGoal(value); // Update the 'goal' state with the new value
  };

  // Function to reset the form
  const resetForm = () => {
    setGoal(""); // Set the 'goal' state back to an empty string
  };

  return (
    /* Form element with a submit event listener */
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="goal"
        id="goal"
        value={goal} // Bind the value of the input field to the 'goal' state
        onChange={handleChange} // Event listener for input field change
        autoComplete="off"
      />
      <button>Add Goal</button> {/* Button to submit the form */}
    </form>
  );
};

export default Form; // Export the Form component
