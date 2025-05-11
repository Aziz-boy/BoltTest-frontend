// HistoryQuizGenerator.jsx (Main component)
import React, { useState } from "react";
import axios from "axios";
import ChatHeader from "./ChatHeader";
import TextInputSection from "./TextInputSection";
import QuestionCountInput from "./QuestionCountInput";
import GenerateButton from "./GenerateButton";
import GeneratedQuestions from "./GeneratedQuestions";
import ErrorMessage from "./ErrorMessage";

const HistoryQuizGenerator = () => {
  const [text, setText] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [generatedQuestions, setGeneratedQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const clearChat = () => {
    setText("");
    setGeneratedQuestions("");
  };

  const handleSubmit = async () => {
    if (!text.trim() || !numberOfQuestions) {
      setError("Matn va savollar soni majburiy.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://bolttest-backend-1.onrender.com/api/chat",
        {
          text,
          numberOfQuestions,
        }
      );

      setGeneratedQuestions(response.data.reply);
    } catch (error) {
      setError(
        "Savollar yaratishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring."
      );
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-500`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ChatHeader
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          clearChat={clearChat}
        />

        <div className="space-y-6 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
            <TextInputSection
              text={text}
              setText={setText}
              darkMode={darkMode}
            />

            <QuestionCountInput
              numberOfQuestions={numberOfQuestions}
              setNumberOfQuestions={setNumberOfQuestions}
              darkMode={darkMode}
            />

            <ErrorMessage error={error} />

            <GenerateButton
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              darkMode={darkMode}
            />
          </div>

          {generatedQuestions && (
            <div className="transform transition-all duration-300">
              <GeneratedQuestions
                generatedQuestions={generatedQuestions}
                darkMode={darkMode}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryQuizGenerator;
