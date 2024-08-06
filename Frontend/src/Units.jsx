import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import "./Units.css";

const API_KEY = "AIzaSyBz6ZMkM3Ywg2ua8YaIC0q7GVyd4Isblws";
const genAI = new GoogleGenerativeAI(API_KEY);

let arr = [];
let subjTopic = { subjectName: "", units: "" };
let ans = "";

export default function Units({ units, subjectName }) {
  let [objTopic, SetobjTopic] = useState({
    subjectName: "",
    topics: [],
  });
  let [unitName, setUnitName] = useState(units);
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  let [noOfQues, setNoOfQues] = useState({
    onemark_mcq: 1,
    onemark_fib: 1,
    twomark_short: 1,
  });

  function noOfQuestion(evt) {
    setNoOfQues({ ...noOfQues, [evt.target.name]: parseInt(evt.target.value) });
  }

  let handelGenerateQs = async (evnt) => {
    subjTopic.subjectName = subjectName;
    subjTopic.units = arr.join(",");
    let mcq = noOfQues.onemark_mcq;
    let fib = noOfQues.onemark_fib;
    let saq = noOfQues.twomark_short;
    console.log(mcq, saq, fib);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Hey listen carefully You have to generate only question from subject : ${subjTopic.subjectName} and chapters : ${subjTopic.units},
    generate 1 marks ${noOfQues.onemark_mcq} MCQ questions, 1 marks ${noOfQues.onemark_fib} fill in the blank questions, 2 marks ${noOfQues.twomark_short} saq questions
    like this..
    
    Group A:                (marks 1)
      1) mcq question 1
      2) mcq question 2
      3) mcq question 3

    Group B:                (marks 1)
      1) fill in the blank question 1
      2) fill in the blank question 2
      3) fill in the blank question 3

    Group C:                (marks 2)
      1) saq question 1
      2) saq question 2
      3) saq question 3
    `;
    setLoading(true);
    try {
      const result = await model.generateContent(prompt);
      setLoading(false);

      const response = result.response;
      // const jsonANS = JSON.stringify(response, null, 2);
      console.log(response.text());
      // console.log(formattedQuestions);
      // const text = response.text();
      navigate("/questions", { state: { qs: response.text() } });
    } catch (error) {
      // textRef.current.innerText = "Check Your Internet Connection...";
      console.log(error);
    }
    // console.log(subjectName);
    // console.log(arr);
    // console.log(subjTopic);
  };

  return (
    <>
      <div
        className={loading ? "is_visible" : ""}
        style={{
          // display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        <h2>Units</h2>
        <div>
          {Object.keys(unitName).map((key) => {
            const chapter = unitName[key];
            const topics = unitName[key].topics;
            // console.log(unitName[key].topics);
            return (
              <UnitCards
                unitNo={chapter}
                topic={topics}
                key={key}
                props={(SetobjTopic, objTopic)}
              />
            );
          })}
        </div>
        <div>
          <br />
          <br />
          <form>
            <label htmlFor="MCQ">Enter No. of MCQ </label>
            <input
              id="MCQ"
              placeholder="Enter MCQ out of 5 "
              type="number"
              value={noOfQues.onemark_mcq}
              min={1}
              max={10}
              name="onemark_mcq"
              onChange={noOfQuestion}
            ></input>
            <br /> <br />
            <label htmlFor="Fill">Enter No. of Fill in The blanks </label>
            <input
              id="Fill"
              placeholder="Enter Fill in the blanks out of 5 "
              type="number"
              value={noOfQues.onemark_fib}
              min={1}
              max={5}
              name="onemark_fib"
              onChange={noOfQuestion}
            ></input>
            <br /> <br />
            <label htmlFor="SAQ">Enter No. of SAQ </label>
            <input
              id="SAQ"
              placeholder="Enter SAQ out of 5 "
              type="number"
              value={noOfQues.twomark_short}
              min={1}
              max={5}
              name="twomark_short"
              onChange={noOfQuestion}
            ></input>
          </form>
        </div>
        <button
          style={{
            height: "40px",
            width: "6rem",
            border: "4px solid red",
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "6px",
            // fontWeight: "900",
            fontSize: "15px",
            // textDecoration: "none",
            justifyContent: "center",
            margin: "1rem",
            cursor: "pointer",
          }}
          onClick={handelGenerateQs}
        >
          Generate
        </button>
        <div>
          <p>{ans}</p>
        </div>
      </div>
      <img
        src="../loading.gif"
        className={loading ? "loading" : "loading is_visible"}
      ></img>
    </>
  );
}

function UnitCards({ unitNo, topic, props }) {
  let [topics, setTopic] = useState(topic);
  const [isChecked, setIsChecked] = useState(false);

  let handleChangeBox = (evnt) => {
    if (evnt.target.checked) arr.push(evnt.target.name);
    else arr = arr.filter((item) => item !== evnt.target.name);
  };

  let handelCheckedBtn = () => {
    // console.log(unitNo.name);
    // props.SetobjTopic((currentData) => {
    //   return;
    //   [...currentData, { subjectName: unitNo.name }];
    // });
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          backgroundColor: "#54c0eb",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "15rem",
            border: "4px solid #d4c902",
            // backgroundColor: "#00528c",
            color: "black",
            borderRadius: "6px",
            // fontWeight: "900",
            fontSize: "15px",
            // textDecoration: "none",
            justifyContent: "center",
            margin: "1rem",
            cursor: "pointer",
          }}
          onClick={handelCheckedBtn}
        >
          {unitNo.name}
        </button>

        <div style={isChecked == false ? { display: "none" } : {}}>
          <h2>Topcis</h2>

          <FormGroup>
            {topics.map((topic, index) => (
              // console.log(topic),
              <FormControlLabel
                control={<Checkbox />}
                label={topic}
                key={topic + index}
                name={topic}
                onChange={handleChangeBox}
              />
            ))}
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
