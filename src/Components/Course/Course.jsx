import React from "react";
import "./Course.css";
const Course = () => {
  return (
    <div className="course-container">
      <div className="course-card flex flex-col">
        <div className="course-text flex flex-col">
          <p>Design</p>
          <h2>
            How to make a quality site in WordPress in 40 hours without
            experience
          </h2>
        </div>
        <div className="read-more">
          <p>read more</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
