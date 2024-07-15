import React, { useState } from "react";

const MCQQuestion = ({ question, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mcq-question">
      <p>{question}</p>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={question} // Ensure name is unique for each question
              value={option}
              id={`${question}-${index}`}
              checked={option === selectedOption}
              onChange={handleOptionChange}
            />
            <label htmlFor={`${question}-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MCQQuestion;
