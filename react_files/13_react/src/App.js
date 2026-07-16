import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const show = "book"; // change: "blog", "course"

  // 1️⃣ IF-ELSE
  let content;
  if (show === "book") {
    content = <BookDetails />;
  } else if (show === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div>
      <h1>Blogger App</h1>

      {/* Method 1 */}
      {content}

      <hr />

      {/* Method 2: Ternary */}
      {show === "blog" ? <BlogDetails /> : <CourseDetails />}

      <hr />

      {/* Method 3: AND */}
      {show === "course" && <CourseDetails />}
    </div>
  );
}

export default App;