// Import the necessary dependency for useRef from the 'react' library.
import { useRef } from "react";

// Import a JavaScript function named 'hashString' that hashes a string.
import hashString from "../utils/hashString";

// Import the CSS module for styling.
import s from "./HashForm.module.css";

// Creation of the whole app
const HashedForm = () => {
  // Create two useRef variables (emailRef and passwordRef) initialized with null.
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Function executed on the "Submit" button click
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Check if either input field is empty
    if (email === "" || password === "") {
      alert("All fields must be filled");
      return;
    }

    // Perform string hashing on the email and password
    const hashedEmail = hashString(email);
    const hashedPassword = hashString(password);
    alert(`Hashed data: email: ${hashedEmail}, password: ${hashedPassword}`);

    // Reset the form inputs by setting their values to an empty string
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="email">
          Email:
        </label>
        {/* Create an input field for the email with a reference to 'emailRef' */}
        <input className={s.input} type="email" id="email" ref={emailRef} />
      </div>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="password">
          Password:
        </label>
        {/* Create an input field for the password with a reference to 'passwordRef' */}
        <input
          className={s.input}
          type="password"
          id="password"
          ref={passwordRef}
        />
      </div>
      {/* Create a submit button */}
      <button className={s.button} type="submit">
        Submit
      </button>
    </form>
  );
};

// Export the 'Form' component for use in other parts of the application.
export default HashedForm;
