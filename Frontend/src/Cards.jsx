import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards({ subName, subPath }) {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(subPath);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <button
        style={{
          width: "12rem",
          height: "5rem",
          fontSize: "20px",
          backgroundColor: "black",
          color: "white",
          border: "2px solid #fff",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          //boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        onClick={handleButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "black";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#333";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {subName}
      </button>
    </div>
  );
}
