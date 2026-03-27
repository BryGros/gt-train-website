import CourseItem from "./CourseItem";

export default function CourseResults({ courseObject }) {
  
  // Check if no courses returned from current filters
  const noFilteredCourses = courseObject.length === 0;

  return (
    <div className="results-wrapper">
      {courseObject.map((course) => {
        return <CourseItem course={course} key={course.id} />;
      })}
      {noFilteredCourses ? <h2>No results returned based on filters</h2> : ""}
    </div>
  );
}
