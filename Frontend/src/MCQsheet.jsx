import React from "react";
import MCQQuestion from "./MCQQuestion"; // Ensure to import the component

const MCQSheet = ({ data }) => {
  return (
    <div className="mcq-sheet">
      {data.mcq.map((questionObj, index) => {
        const question = Object.keys(questionObj)[0];
        const options = questionObj[question];
        return (
          <MCQQuestion key={index} question={question} options={options} />
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <MCQSheet data={data} />
    </div>
  );
};

export default App;
