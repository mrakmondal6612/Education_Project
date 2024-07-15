import { useState } from "react";
import Units from "./Units";

export default function DSA() {
  let [chapterName, setChapterName] = useState({
    u1: {
      name: " Linear Data Structure ",
      path: "/subjectstopics",
      topics: [
        "Implementation Of Array Operations ",
        " Stack & Queues",
        "Merging Problems",
        "Implementation Of Linked List ",
        "Polynomial addition, Polynomial multiplication",
      ],
    },
    u2: {
      name: "Non Linear Data Structure ",
      path: "/subjectstopics",
      topics: [
        "Recursive & Non Recursive traversal of Trees",
        "  Binary Trees, AVL Trees, Applications of Trees",
        "Hash tabiles implementation",
      ],
    },
  });

  return (
    <div>
      <h1>DSA</h1>
      <Units units={chapterName} />
    </div>
  );
}
