import { useState } from "react";
import { useEffect } from "react";
import CourseResults from "./CourseResults";
import CourseSearch from "./CourseSearch";
import getAllCourseData from "../helper-functions/getAllCourses";
import { monthOrder } from "../data/monthOrder";

export default function EformsCourses() {
  // getAllCourses Hook
  const { courseData, loading, error, fetchCourseInfo } = getAllCourseData();

  // Loading Elements
  const loadingElem = <div className="loading">Loading course data...</div>;
  const errorMsg = (
    <div className="error">
      <p>Error: {error}</p>
      <button onClick={fetchCourseInfo}>Try Again</button>
    </div>
  );

  // Initiate filters
  const [filters, setFilters] = useState({
    courseName: "all",
    tag: "all",
    month: "all",
  });

  // List Courses returned based on current filters
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
        filteredResults={filteredCourses}
      />
      {loading && loadingElem}
      {error && errorMsg}
      <CourseResults courseObject={filteredCourses} />
    </div>
  );
}
