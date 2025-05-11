import React, { useState } from "react";

const GeneratedQuestions = ({ generatedQuestions, darkMode }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const questions = generatedQuestions
    .split(/\n(?=\d+\.\s)/)
    .filter((q) => q.trim() !== "");

  const handleCopy = () => {
    const textToCopy = questions.join("\n\n");
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-1`}
          >
            Savolnoma Natijalari
          </h2>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Yaratilgan savollarni nusxa oling
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {copySuccess ? "✓ Nusxa olindi!" : "Barchasini Nusxa Olish"}
        </button>
      </div>

      <div
        className={`p-6 rounded-xl transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        } shadow-md hover:shadow-lg`}
      >
        <div className="whitespace-pre-line text-lg leading-relaxed">
          {questions.map((question, index) => (
            <div key={index} className="mb-4 last:mb-0">
              {question.trim()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratedQuestions;
