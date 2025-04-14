// GenerateButton.jsx
import React from "react";

const GenerateButton = ({ handleSubmit, isLoading, darkMode }) => {
  return (
    <button
      onClick={handleSubmit}
      className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 ${darkMode ? 'dark:hover:bg-blue-700' : ''}`}
      disabled={isLoading}
    >
      {isLoading ? "Generating..." : "Generate Questions"}
    </button>
  );
};

export default GenerateButton;