import getFilterDropdownValues from "../helper-functions/getFilterDropdownValues";

export default function CourseSearch({ filters, setFilters, filteredResults }) {
  const { allMonths, allNames, allTypes } = getFilterDropdownValues();

  return (
    <div className="filters-wrap">
      <div className="dropdown-wrap">
        <div className="select-wrap">
          <label htmlFor="month-filter">Month: </label>
          <select
            value={filters.month}
            id="month-filter"
            onChange={(e) => setFilters({ ...filters, month: e.target.value })}
          >
            <option value="all">All Months</option>
            {allMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrap">
          <label htmlFor="name-filter">Course Name:</label>
          <select
            id="name-filter"
            value={filters.courseName}
            onChange={(e) =>
              setFilters({ ...filters, courseName: e.target.value })
            }
          >
            <option value="all">All Courses</option>
            {allNames.map((courseName) => (
              <option key={courseName} value={courseName}>
                {courseName}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrap">
          <label htmlFor="type-filter">Type:</label>
          <div className="last-select">
            <select
              id="type-filter"
              value={filters.tag}
              onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
            >
              <option value="all">All Types</option>
              {allTypes.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <button
              className="reset-filt-btn"
              onClick={(e) =>
                setFilters({ courseName: "all", tag: "all", month: "all" })
              }
            >
              Reset Filters
            </button>
            <div className="results-num"><span className="result-num">{filteredResults.length}</span> courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}
