import React from "react";
import "../../index.css";
import Form from "../Form/Form";
import GoalList from "../GoalList/GoalList";

const App = () => {
  return (
    <div className="container">
      <Form />
      <GoalList />
    </div>
  );
};

export default App;
