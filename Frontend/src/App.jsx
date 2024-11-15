import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import ResponsiveAppBar from "./NavBar";
import Units from "./Units";
import Subjects from "./SubjectCards.jsx";
import SubjectsRoutes from "./SubjectsRoutes.jsx";
import Maths from "./Maths.jsx";
import Python from "./Python.jsx";
import CProgramming from "./CProgramming.jsx";
import DSA from "./DSA.jsx";
import IntrocductionToPython from "./DSA.jsx";
import SubjectsTopics from "./SubjectTopics.jsx";
import Questions from "./Questions.jsx";
import "./All.css";
import SignUp from "./Signup.jsx"; // Only once here
 
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> {/* Ensure this route uses SignUp */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/units" element={<Units />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/python" element={<Python />} />
          <Route path="/cprogramming" element={<CProgramming />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/subjectstopics" element={<SubjectsTopics />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
