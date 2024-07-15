import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Questions = () => {
  const location = useLocation();
  const { qs } = location.state || {};
  const textRef = useRef(null); // Initialize useRef with null

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerText = qs || "Questions set will be shown here..."; // Set innerText when component mounts
    }
  }, [qs]);

  return (
    <div>
      <p ref={textRef}></p>
    </div>
  );
};

export default Questions;
