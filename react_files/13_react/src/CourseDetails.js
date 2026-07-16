import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React", duration: "3 months" },
    { id: 2, name: "Angular", duration: "2 months" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <p key={course.id}>
          {course.name} - {course.duration}
        </p>
      ))}
    </div>
  );
}

export default CourseDetails;