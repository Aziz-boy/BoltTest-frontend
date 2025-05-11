// ChatHeader.jsx (You mentioned you already have this, but here's a sample if needed)
import React from "react";

const ChatHeader = ({ darkMode, setDarkMode, clearChat }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex flex-col">
        <h1
          className={`text-4xl font-bold bg-gradient-to-r ${
            darkMode
              ? "from-blue-400 to-purple-500"
              : "from-blue-600 to-purple-600"
          } bg-clip-text text-transparent mb-1`}
        >
          Savolnoma
        </h1>
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Tarix savollarini yaratish platformasi
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {darkMode ? "☀️ Yorug'lik" : "🌙 Qorong'u"}
        </button>
        <button
          onClick={clearChat}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white transition-all duration-300 transform hover:scale-105 hover:from-red-600 hover:to-pink-600"
        >
          Tozalash
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
