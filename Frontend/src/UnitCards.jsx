import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBz6ZMkM3Ywg2ua8YaIC0q7GVyd4Isblws";
const genAI = new GoogleGenerativeAI(API_KEY);

export default function UnitCards({ unitNo, topic }) {
  const navigate = useNavigate();
  let [topics, setTopic] = useState(topic);
  let [openTopic, setOpenTopic] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  let gotoPath = () => {
    setOpenTopic(true);
    // setOpenTopic(false);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "15rem",
            // border: "4px solid #d4c902",
            // backgroundColor: "#00528c",
            color: "black",
            borderRadius: "6px",
            // fontWeight: "900",
            fontSize: "15px",
            // textDecoration: "none",
            justifyContent: "center",
            margin: "1rem",
            cursor: "pointer",
            border: "2px solid red"
          }}
        >
          {unitNo.name}
        </button>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        <div style={checked == false ? { display: "none" } : {}}>
          <h2>Topcis</h2>

          <FormGroup>
            {topics.map((topic) => (
              // console.log(topic),
              <FormControlLabel
                control={<Checkbox />}
                label={topic}
                key={topic}
              />
            ))}
            {/* <button
              style={{
                height: "40px",
                width: "6rem",
                border: "4px solid #d4c902",
                backgroundColor: "#00528c",
                color: "white",
                borderRadius: "6px",
                // fontWeight: "900",
                fontSize: "15px",
                // textDecoration: "none",
                justifyContent: "center",
                margin: "1rem",
                cursor: "pointer",
              }}
            >
              Generate
            </button> */}
          </FormGroup>
        </div>
      </div>
    </div>
  );
} 