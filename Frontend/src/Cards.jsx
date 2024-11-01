import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards({ subName, subPath }) {
  const navigate = useNavigate();

  let handelButton = () => {
    // console.log("Path = " + subPath);
    // console.log("Name = " + subName);
    navigate(subPath);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // justifyItems: "center",
        margin: "10px",
        
        flexDirection: "row",
      }}
    >
      <button
        style={{
          width: "10rem",
          height: "5rem",
          textAlign: "center",
          fontSize:"20px",
          justifyContent: "center",
          justifyItems: "center",
          backgroundColor:"#4098d3",
          borderRadius:"20px",
        }}
        onClick={handelButton}
      >
        {subName}
      </button>
    </div>
  );
}
