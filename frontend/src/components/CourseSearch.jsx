export default function CourseSearch({ filters, setFilters, allMonths }) {
  // const filterCourses (setFilter) => {
  //     const newFilter = {}
  // }

  return (
    <div className="filters-wrap">
      <select value={filters.month}>
        <option value="all">All Months</option>
        {allMonths.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
