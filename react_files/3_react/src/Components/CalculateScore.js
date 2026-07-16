import "../Stylesheets/mystyle.css";

function CalculateScore() {
  const name = "John";
  const school = "ABC School";
  const total = 500;
  const goal = 5;

  const average = total / goal;

  return (
    <div className="container">
      <h1>Student Score Calculator</h1>
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total Marks: {total}</p>
      <p>Subjects: {goal}</p>
      <h2>Average Score: {average}</h2>
    </div>
  );
}

export default CalculateScore;