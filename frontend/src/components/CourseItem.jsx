export default function CourseItem({ course }) {
  const courseTagArray = course.tags;
  const sessionObj = course.sessions;
  const sessionArray = sessionObj.sessions || [];
  const dedicatedOnly = courseTagArray.includes("Dedicated Only");
  const selfPacedOpt = course?.selfCost;

  // Define Elements
  const courseSchedule = (
    <div className="schedule-wrap">
      <h4>Upcoming Sessions:</h4>
      <div className="sessions-wrap">
        {sessionArray.length > 0 ? (
          sessionArray.map((session, index) => (
            <p className="session-text" key={index}>
              <i className="fa-regular fa-calendar"></i>{" "}
              {new Date(session.date).toLocaleDateString()}, {session.time} MDT
            </p>
          ))
        ) : (
          <p>No upcoming sessions scheduled, check back soon!</p>
        )}
      </div>
    </div>
  );

  const ppsBtn = (
    <button className="pps-btn">
      <h3>Scheduled Class</h3>
      {course.perSeatCost > 2000
        ? "(get $300 off when you register 30 days in advance)"
        : "(select class date at checkout)"}
      <h3 className="reg-cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(course.perSeatCost)}
      </h3>
    </button>
  );

  const selfPacedBtn = (
    <button className="selfp-btn">
      <h3>Self-Paced</h3>
      (Two-week modular training)
      <h3 className="reg-cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(course.selfCost)}
      </h3>
    </button>
  );

  return (
    <div className="item-wrapper">
      <div className="course-header">
        <div className="tags-wrap">
          {courseTagArray.map((tag) => {
            return (
              <div
                className={`${tag.slice(0, 3).concat(tag.slice(-4)).toLowerCase()} tag`}
                key={tag}
              >
                {tag}
              </div>
            );
          })}
        </div>
        <h1 className="title">{course.name}</h1>
      </div>
      {!dedicatedOnly && courseSchedule}
      <div className="course-info-wrapper">
        <div className="course-info">
          <p>
            <b>Who this training is for: </b>
            {course.wttif}
          </p>
          <h3>Description</h3>
          <hr />
          {course.descr}
        </div>
        <div className="reg-btns-wrap">
          <h2>Register for:</h2>
          {!dedicatedOnly && ppsBtn}
          <button className="ded-btn">
            <h3>Dedicated Session</h3>
            (for your org only - up to 8 people)
            <h3 className="reg-cost">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(course.dedCost)}
            </h3>
          </button>
          {selfPacedOpt == null ? "" : selfPacedBtn}
        </div>
      </div>
    </div>
  );
}
