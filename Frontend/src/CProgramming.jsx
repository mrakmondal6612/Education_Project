import { useState } from "react";
import Units from "./Units";

export default function CProgramming() {
  let [chapterName, setChapterName] = useState({
    u1: {
      name: " Introduction",
      path: "/subjectstopics",
      topics: [
        "History of C Language, Features of C",
        "First C Program, C printf() and scanf(), C input/output functions.",
        "Variables in C, Data Types in C, Keywords in C, C identifiers & C comments",
      ],
    },
    u2: {
      name: " Control Statements in C",
      path: "/subjectstopics",
      topics: [" if statement", "  loops", "break continue & pass statements"],
    },
    u3: {
      name: " Array in C",
      path: "/subjectstopics",
      topics: [
        "Arrays, Array basics.",
        "2D array, How to implement and use a 2D array in program",
        "Pointer to Array",
        "Passing array to function ",
      ],
    },
    u4: {
      name: "Strings",
      path: "/subjectstopics",
      topics: [
        "C Strings and String functions.",
        "C strcat(), C strncat(), C strchr(), C strcmp(), C strncmp(), C strcoll(), C strcpy(), C strncpy(), C strrchr(), C strspn(), C strstr(), C strcspn(), strlen()",
      ],
    },
    u5: {
      name: "functions",
      path: "/subjectstopics",
      topics: [
        "What is Functions",
        " Function Call by value method",
        "Function Call by Reference method ",
      ],
    },
    u6: {
      name: "Structure",
      path: "/subjectstopics",
      topics: ["Structures in C "],
    },
    u7: {
      name: " Pointer in C Programming",
      path: "/subjectstopics",
      topics: [
        "C Pointers ",
        " Pointer to pointer ",
        "Function Pointers , Passing pointer to functions  ",
      ],
    },
    u8: {
      name: "File I/O",
      path: "/subjectstopics",
      topics: ["File I/O in C "],
    },
  });

  return (
    <div>
      <h1>C Programming</h1>
      <Units units={chapterName} />
    </div>
  );
}
