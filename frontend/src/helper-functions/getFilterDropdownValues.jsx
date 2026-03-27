import getAllCourseData from "./getAllCourses";
import { monthOrder } from "../data/monthOrder";

export default function getFilterDropdownValues() {
  const { courseData } = getAllCourseData();

  // Create list of months for dropdown (based on fetched courseData object)
  const allMonths = [
    ...new Set(
      courseData.flatMap((course) =>
        (course.sessions?.sessions || []).map((session) =>
          new Date(session.date).toLocaleString("default", { month: "long" }),
        ),
      ),
    ),
  ].sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));

  // Create list of course names from dropdown (based on fetched courseData object)
  const allNames = [...new Set(courseData.map((course) => course.name))];

  // Create list of tags for dropdown (based on fetched courseData object)
  const allTypes = [...new Set(courseData.flatMap((course) => course.tags))];

  return { allNames, allMonths, allTypes };
}
