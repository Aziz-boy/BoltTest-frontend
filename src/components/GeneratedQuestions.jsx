import React from "react";

const GeneratedQuestions = ({ generatedQuestions }) => {
  // Har bir savolni "1. " bilan ajratamiz
  const questions = generatedQuestions
    .split(/\n(?=\d+\.\s)/) // raqamli savollarni ajratish
    .filter(q => q.trim() !== '');

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Generated Questions
      </h2>

      <div className="max-h-80 overflow-y-auto p-2 sm:p-4 bg-transparent rounded-xl">
        {/* Barcha savollarni bitta kartochkada ko‘rsatamiz */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 whitespace-pre-line text-gray-900 dark:text-gray-100 text-base leading-relaxed">
          {questions.map((question, index) => (
            <div key={index} className="mb-3">
              {question.trim()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratedQuestions;
