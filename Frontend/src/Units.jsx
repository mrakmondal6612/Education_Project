import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Units.css";

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
        setNoOfQues({
            ...noOfQues,
            [evt.target.name]: parseInt(evt.target.value),
        });
    }

    let handelGenerateQs = async (evnt) => {
        subjTopic.subjectName = subjectName;
        subjTopic.units = arr.join(",");
      
        let mcq = noOfQues.onemark_mcq;
        let fib = noOfQues.onemark_fib;
        let saq = noOfQues.twomark_short;
        console.log(mcq, saq, fib);

        setLoading(true);
        try {
            // Backen URL fetching here....
            const response = await fetch(
                "http://127.0.0.1:8080/api/get_questions/get_flb",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        topic: "Array in C++",
                    }),
                }
            );
            if (response.ok) {
                console.log(await response.json());
            }
            setLoading(false);

            // navigate("/questions", { state: { qs: await response.json() } });
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
                }}>
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
                        <label htmlFor='MCQ'>Enter No. of MCQ </label>
                        <input
                            id='MCQ'
                            placeholder='Enter MCQ out of 5 '
                            type='number'
                            value={noOfQues.onemark_mcq}
                            min={1}
                            max={10}
                            name='onemark_mcq'
                            onChange={noOfQuestion}></input>
                        <br /> <br />
                        <label htmlFor='Fill'>
                            Enter No. of Fill in The blanks{" "}
                        </label>
                        <input
                            id='Fill'
                            placeholder='Enter Fill in the blanks out of 5 '
                            type='number'
                            value={noOfQues.onemark_fib}
                            min={1}
                            max={5}
                            name='onemark_fib'
                            onChange={noOfQuestion}></input>
                        <br /> <br />
                        <label htmlFor='SAQ'>Enter No. of SAQ </label>
                        <input
                            id='SAQ'
                            placeholder='Enter SAQ out of 5 '
                            type='number'
                            value={noOfQues.twomark_short}
                            min={1}
                            max={5}
                            name='twomark_short'
                            onChange={noOfQuestion}></input>
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
                    onClick={handelGenerateQs}>
                    Generate
                </button>
                <div>{/* <p>{ans}</p> */}</div>
            </div>
            <img
                src='../loading.gif'
                className={loading ? "loading" : "loading is_visible"}></img>
        </>
    );
}

function UnitCards({ unitNo, topic, props }) {
    let [topics, setTopic] = useState(topic);
    const [isChecked, setIsChecked] = useState(false);

    let handleChangeBox = (evnt) => {
        // if (evnt.target.checked) arr.push(evnt.target.name);
        // else arr = arr.filter((item) => item !== evnt.target.name);
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
                    backgroundImage:
                        "linear-gradient(to right, #00c6ff, #0072ff)",
                    borderRadius: "5px",
                }}>
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
                    onClick={handelCheckedBtn}>
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