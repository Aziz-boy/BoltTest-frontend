// QuestionCountInput.jsx
import React from "react";

const QuestionCountInput = ({
  numberOfQuestions,
  setNumberOfQuestions,
  darkMode,
}) => {
  return (
    <div className="flex flex-col mb-6">
      <label
        className={`text-lg font-medium mb-3 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
        htmlFor="numberOfQuestions"
      >
        Savollar soni
      </label>
      <div className="relative">
        <input
          id="numberOfQuestions"
          type="number"
          min="1"
          max="10"
          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white text-gray-800 border-gray-200"
          }`}
          value={numberOfQuestions}
          onChange={(e) => setNumberOfQuestions(e.target.value)}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          savol
        </div>
      </div>
    </div>
  );
};

export default QuestionCountInput;
