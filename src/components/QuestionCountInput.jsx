// QuestionCountInput.jsx
import React from "react";

const QuestionCountInput = ({ numberOfQuestions, setNumberOfQuestions, darkMode }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className={`text-lg ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`} htmlFor="numberOfQuestions">
        Number of Questions:
      </label>
      <input
        id="numberOfQuestions"
        type="number"
        min="1"
        max="10"
        className={`p-2 border border-gray-300 rounded ${darkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-black'}`}
        value={numberOfQuestions}
        onChange={(e) => setNumberOfQuestions(e.target.value)}
      />
    </div>
  );
};

export default QuestionCountInput;