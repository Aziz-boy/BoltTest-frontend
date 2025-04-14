// ErrorMessage.jsx
import React from "react";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  
  return (
    <p className="text-red-500 text-center mb-4">{error}</p>
  );
};

export default ErrorMessage;