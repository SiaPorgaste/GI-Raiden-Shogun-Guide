import { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <p>Hello, {userName !== "" ? userName : "Guest"}</p>
    </div>
  );
};

export default Form;
