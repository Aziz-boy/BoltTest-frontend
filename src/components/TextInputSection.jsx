// TextInputSection.jsx
import React from "react";

const TextInputSection = ({ text, setText, darkMode }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className={`text-lg ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`} htmlFor="content">
        Content for generating questions:
      </label>
      <textarea
        id="content"
        className={`p-2 border border-gray-300 rounded ${darkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-black'}`}
        rows="6"
        placeholder="Enter content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default TextInputSection;