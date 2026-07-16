import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails name="React Cohort" status="ongoing" />
      <CohortDetails name="Angular Cohort" status="completed" />
      <CohortDetails name="Node Cohort" status="completed" />
    </div>
  );
}

export default App;