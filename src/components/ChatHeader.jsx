// ChatHeader.jsx (You mentioned you already have this, but here's a sample if needed)
import React from "react";

const ChatHeader = ({ darkMode, setDarkMode, clearChat }) => {
  return (
    <div className={`flex justify-between items-center mb-4 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
      <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        History Quiz Generator
      </h1>
      <div className="flex space-x-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={clearChat}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;