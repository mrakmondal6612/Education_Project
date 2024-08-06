import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function SubjectsTopics({ topic }) {
  let [topics, setTopic] = useState(topic);
  return (
    <div>
      <h2>Topcis</h2>
      <FormGroup>
        {topics.map((topic) => (
          <FormControlLabel control={<Checkbox />} label={topic} key={topic} />
        ))}
        <button
          style={{
            height: "40px",
            width: "6rem",
            border: "4px solid red",
            backgroundColor: "skyblue",
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
        </button>
      </FormGroup>
    </div>
  );
}
