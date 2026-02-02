import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    { name: " Sumanth Akarapu", rollNo: "2303A52191", marks: 50 },
    { name: "Rushindra", rollNo: "2303A52199", marks: 98 },
    { name: "Vishnu", rollNo: "2303A52200", marks: 97 },
    { name: "Manideep", rollNo: "2303A52183", marks: 90 },
    { name: "Jayanth", rollNo: "2303A52191", marks: 93 },
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Marks Card</h1>

      {/*  Passing data as props via mapping */}
      {students.map((s, index) => (
        <StudentCard
          key={s.rollNo + index}
          name={s.name}
          rollNo={s.rollNo}
          marks={s.marks}
        />
      ))}
    </div>
  );
}

export default App;