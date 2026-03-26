import { useState } from "react";
import { useEffect } from "react";
import CourseResults from "./CourseResults";

export default function eFormsCourses() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(courseData);

  useEffect(function getCourses() {
    fetchCourseInfo();
  }, []);

  const fetchCourseInfo = () => {
    setLoading(true);
    setError(null);

    // Fetch course info from Express Server
    fetch("http://localhost:3001/api/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
        setLoading(false);
        setFilteredCourses(data);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Loading element
  const loadingElem = <div className="loading">Loading course data...</div>;

  // Loading Errors
  const errorMsg = (
    <div className="error">
      <p>Error: {error}</p>
      <button onClick={fetchCourseInfo}>Try Again</button>
    </div>
  );

  return (
    <div className="courses">
      {loading && loadingElem}
      {error && errorMsg}
      <CourseResults courseObject={filteredCourses} />
    </div>
  );
}
