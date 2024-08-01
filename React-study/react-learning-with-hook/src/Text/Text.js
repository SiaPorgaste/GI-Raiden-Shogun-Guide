import { useState } from "react";

const Text = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <button onClick={toggleVisibility} className="button">
        Toggle Visibility
      </button>
      {isVisible && <p className="text">This text is now visible</p>}
    </div>
  );
};

export default Text;
