import { useState, useEffect } from "react";

export default function getAllCourseData() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch course info from Express Server
  const fetchCourseInfo = () => {
    setLoading(true);
    setError(null);

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

  // Run fetch on mount
  useEffect(function getCourses() {
    fetchCourseInfo();
  }, []);

  return { courseData, loading, error, fetchCourseInfo };
}
