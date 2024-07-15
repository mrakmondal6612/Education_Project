import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maths from "./Maths.jsx";

export default function SubjectsRoutes() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/maths" element={<Maths />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
