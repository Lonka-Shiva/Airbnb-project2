import logo from "../Images/airbnb-logo.png";
export default function Navbar() {
  return (
    <>
      <nav>
        <img src={logo} alt="image" className="nav-logo" />
        <div className="center-blocker"></div>
      </nav>
    </>
  );
}
