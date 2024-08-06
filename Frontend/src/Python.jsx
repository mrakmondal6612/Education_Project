import { useState } from "react";
import Units from "./Units";
import SubjectsTopics from "./SubjectTopics";
import './Python.css';

export default function Python() {
  const subjectName = "Python";
  let [chapterName, setChapterName] = useState({
    u1: {
      name: " Introduction",
      path: "/subjectstopics",
      topics: [
        "How to install Python on your system",
        " Creating you first Python Project",
        "Python Comments",
      ],
    },
    u2: {
      name: " Control Statements and loops",
      path: "/subjectstopics",
      topics: [" if statement", "  loops", "break continue & pass statements"],
    },
    u3: {
      name: " Data types",
      path: "/subjectstopics",
      topics: [
        "Python numbers",
        " Python List",
        "Python String",
        "Python tuple",
      ],
    },
    u4: {
      name: " Python functions",
      path: "/subjectstopics",
      topics: [
        "What is Functions",
        " Default arguments in Functiont",
        "Types of functions",
      ],
    },
  });

  return (
    <>
    <div className="py-sub">
    <h1 className="tl">Python</h1>
      <Units units={chapterName} subjectName={subjectName} />
    </div>
    </>
  );
}
// aee{a{a, n}}
// aee.a.a
