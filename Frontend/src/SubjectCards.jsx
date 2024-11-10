import Cards from "./Cards.jsx";

export default function SubjectsCard() {
  let subjects = ["Python", "C Programming", "C++", "DSA"];
  let subPaths = ["/python", "/cprogramming", "/cpp", "/dsa"];

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  };

  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "200px",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  const cardTitleStyle = {
    fontSize: "18px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Subjects</h2>
      <div style={cardContainerStyle}>
        {subjects.map((sub, indx) => (
          <div key={indx} style={cardStyle}>
            <Cards subName={sub} subPath={subPaths[indx]} />
            <p style={cardTitleStyle}>{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
