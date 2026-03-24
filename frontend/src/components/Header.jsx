export default function Header() {
  return (
    <header className="header-wrap">
      <div className="social-bar">
        <a href="https://www.linkedin.com/company/gideon-taylor">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://www.youtube.com/@GideonTaylorConsulting">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="main-bar">
        <img
          className="gt-logo"
          src="./src/assets/gideon-taylor-stacked.svg"
          alt="Gideon Taylor logo"
        />
        <div className="menu">
          <a href="">eForms Training</a>
          <a href="">WebUX Training</a>
          <a href="">Sys Admin Training</a>
        </div>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
}
