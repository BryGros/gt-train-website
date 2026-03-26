import CourseItem from "./CourseItem";

export default function CourseResults({ courseObject }) {
  return (
    <div className="results-wrapper">
      {courseObject.map((course) => {
        return <CourseItem course={course} key={course.id} />;
      })}
    </div>
  );
}
