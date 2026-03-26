import { useState } from "react";
import { useEffect } from "react";
import CourseResults from "./CourseResults";
import CourseSearch from "./CourseSearch";

export default function EformsCourses() {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    courseName: "all",
    tag: "all",
    month: "all",
  });

  // Fetch course info from Express Server
  useEffect(function getCourses() {
    fetchCourseInfo();
  }, []);

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

  // Loading element
  const loadingElem = <div className="loading">Loading course data...</div>;

  // Loading Errors
  const errorMsg = (
    <div className="error">
      <p>Error: {error}</p>
      <button onClick={fetchCourseInfo}>Try Again</button>
    </div>
  );

  // Set Month Order
  const monthOrder = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Create list of months for dropdown (based on courseData object)
  const allMonths = [
    ...new Set(
      courseData.flatMap((course) =>
        (course.sessions?.sessions || []).map((session) =>
          new Date(session.date).toLocaleString("default", { month: "long" }),
        ),
      ),
    ),
  ].sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

  // Create list of course names from dropdown based on courseData object
  const allNames = [...new Set(courseData.map((course) => course.name))];

  // Set Courses Returned Based on Filters
  const filteredCourses = courseData.filter((course) => {
    const matchesName =
      filters.courseName === "all" || course.name === filters.courseName;
    const matchesTag =
      filters.tag === "all" || course.tags.includes(filters.tag);
    const matchesMonth =
      filters.month === "all" ||
      (course.sessions?.sessions || []).some((session) => {
        const date = new Date(session.date);
        return (
          date.toLocaleString("default", { month: "long" }) === filters.month
        );
      });
    return matchesName && matchesTag && matchesMonth;
  });

  return (
    <div className="courses">
      <CourseSearch
        filters={filters}
        setFilters={setFilters}
        allMonths={allMonths}
      />
      {loading && loadingElem}
      {error && errorMsg}
      <CourseResults courseObject={filteredCourses} />
    </div>
  );
}
