export default function Header() {
  return (
    <header className="header-wrap">
      <div className="social-bar">
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
      <div className="main-bar">
        <img
          src="../assets/gideon-taylor-stacked.svg"
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
