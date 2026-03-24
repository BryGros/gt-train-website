import { useState } from "react";
import { useEffect } from "react";
export default function Main() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      {courseData.map((course) => {
        return (
          <div key={course.id} className="courseCard">
            <h2>{course.name}</h2>
            <h3>Who this training is for: {course.wttif}</h3>
            <h3>Length: {course.length}</h3>
            <p>{course.descr}</p>
            <p>
              <b>Cost: </b>
            </p>
            <p>
              ${course.perSeatCost} per seat for a Currently Scheduled Open
              Sessions
            </p>
            <p>
              ${course.dedCost} for a Dedicated Session (by request - your
              company only, up to 8 attendees)
            </p>
          </div>
        );
      })}
    </div>
  );
}
