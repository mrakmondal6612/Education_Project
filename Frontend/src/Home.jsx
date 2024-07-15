import { useNavigate } from "react-router-dom";
import SubjectCard from "./SubjectCards.jsx";

export default function Home() {
  const navigate = useNavigate();
  let handelClickLogin = () => {
    navigate("/login");
  };
  let handelClickRegis = () => {
    navigate("/registration");
  };

  return (
    <div>
      <SubjectCard />
    </div>
  );
}
