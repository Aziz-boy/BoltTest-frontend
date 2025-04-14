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
      setError("Both text and number of questions are required.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        text,
        numberOfQuestions,
      });

      setGeneratedQuestions(response.data.reply);
    } catch (error) {
      setError("Error generating questions. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex flex-col h-screen p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-500`}>
      <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} clearChat={clearChat} />
      
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
      
      {generatedQuestions && (
        <GeneratedQuestions 
          generatedQuestions={generatedQuestions} 
          darkMode={darkMode} 
        />
      )}
    </div>
  );
};

export default HistoryQuizGenerator;