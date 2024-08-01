import React from "react";
// Change the lines below:
import { useDispatch, useSelector } from "react-redux";
import { removeGoal } from "../../redux/actions/goalAction";

const GoalList = () => {
  // Change the line below:
  const goals = useSelector((state) => state.goals); // Retrieve the 'goals' array from the Redux store
  // Change the line below:
  const dispatch = useDispatch(); // Create a dispatch function from the Redux store

  // Event handler for removing a goal
  const handleRemoveGoal = (goal) => {
    // Change the line below:
    dispatch(removeGoal(goal)); // Dispatch the 'removeGoal' action with the goal to be removed
  };

  return (
    <div>
      <ul>
        {/* Render a list item for each goal in the 'goals' array */}
        {goals.map((goal) => (
          <li key={goal.id}>
            <h2>{goal.text}</h2> {/* Display the text of the goal */}
            <button
              onClick={() => handleRemoveGoal(goal)} // Call 'handleRemoveGoal' when the button is clicked
              className="remove-btn"
            >
              &#215; {/* Render an 'x' symbol as the button content */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList; // Export the GoalList component
