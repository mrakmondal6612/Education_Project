import { useState } from "react";
import Cards from "./Cards.jsx";
import UnitCards from "./UnitCards.jsx";

export default function SubjectsCard() {
  let subjects = ["Python", "C Programming", "DSA"];
  let subPaths = ["/python", "/cprogramming", "/dsa"];

  return (
    <div>
      <h2>Subjects</h2>
      {subjects.map((sub, indx) => (
        <Cards subName={sub} subPath={subPaths[indx]} key={indx} />
      ))}
    </div>
  );
}
