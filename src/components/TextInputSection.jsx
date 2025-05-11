// TextInputSection.jsx
import React from "react";

const TextInputSection = ({ text, setText, darkMode }) => {
  return (
    <div className="flex flex-col mb-6">
      <label
        className={`text-lg font-medium mb-3 ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
        htmlFor="content"
      >
        Savollar yaratish uchun matn
      </label>
      <div className="relative">
        <textarea
          id="content"
          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
              : "bg-white text-gray-800 border-gray-200 placeholder-gray-400"
          }`}
          rows="6"
          placeholder="Tarixiy matnni shu yerga kiriting..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="absolute bottom-3 right-3 text-sm text-gray-400">
          {text.length} belgi
        </div>
      </div>
    </div>
  );
};

export default TextInputSection;
